import React, { FC, ChangeEvent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSkillImgSrc } from "../../../lib/func";
import { CategoryArr, skillDataArray } from "../../../lib/static";
import { writeActionCreater } from "../../../module/action/write";
import { StoreType } from "../../../module/reducer";
import CategoryItem from "./CategoryItem/CategoryItem";
import * as S from "./styles";

const BoardWriteModal: FC = () => {
  const dispatch = useDispatch();
  const { isOpen, type, skills, skill } = useSelector((store: StoreType) => {
    return {
      isOpen: store.write.modalIsOpen,
      type: store.write.type,
      skills: store.write.skills,
      skill: store.write.skill
    };
  });

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(
      writeActionCreater.inputUpdate({
        name,
        value
      })
    );
  }, []);

  const addSkills = useCallback((skill: string) => {
    dispatch(writeActionCreater.setSkills(skill));
  }, []);

  const clearCategory = useCallback(() => {
    dispatch(writeActionCreater.clearCategory());
    dispatch(writeActionCreater.changeModalState(false));
  }, []);

  const closeModal = useCallback(() => {
    dispatch(writeActionCreater.changeModalState(false));
  }, []);

  return (
    isOpen && (
      <S.Container isSecond={type === "SKILL"}>
        <div>
          <div>
            <S.Modal>
              {CategoryArr.map(category => (
                <CategoryItem key={category} value={category} />
              ))}
            </S.Modal>
          </div>
          <div>
            <S.SearchBox>
              <S.SearchMySkills>
                {skills.map(src => (
                  <S.SkillImg src={getSkillImgSrc(src)} />
                ))}
              </S.SearchMySkills>
              <div>
                <S.SearchInput
                  autoComplete="off"
                  placeholder="기술스택"
                  type="text"
                  onChange={changeHandler}
                  name="skill"
                  value={skill}
                />
                <S.SearchSkillWrp>
                  <div>
                    {skill &&
                      skillDataArray
                        .filter(data => data.searchName.includes(skill))
                        .map(data => (
                          <S.SearchSkillLine
                            key={data.showName}
                            onClick={() => {
                              addSkills(data.showName);
                            }}
                          >
                            {data.showName}
                          </S.SearchSkillLine>
                        ))}
                  </div>
                  <S.ButtonWrap>
                    <S.Button onClick={clearCategory}>취소</S.Button>
                    <S.Button onClick={closeModal}>완료</S.Button>
                  </S.ButtonWrap>
                </S.SearchSkillWrp>
              </div>
            </S.SearchBox>
          </div>
        </div>
      </S.Container>
    )
  );
};

export default BoardWriteModal;
