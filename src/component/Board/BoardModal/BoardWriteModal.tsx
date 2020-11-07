import React, { FC, ChangeEvent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CategoryArr,
  skillDataArray,
  skillNameToSrc
} from "../../../lib/static";
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
          <S.SearchBox>
            <S.MySkills>
              {skills.map(src => (
                <S.SkillImg src={skillNameToSrc[src]} />
              ))}
            </S.MySkills>
            <S.SkillWrap>
              <S.Input
                placeholder="기술스택"
                type="text"
                onChange={changeHandler}
                name="skill"
                value={skill}
              />
              {skill && (
                <S.SearchSkill>
                  {skillDataArray
                    .filter(data => data.searchName.includes(skill))
                    .map(data => (
                      <div
                        key={data.showName}
                        onClick={() => {
                          addSkills(data.showName);
                        }}
                      >
                        {data.showName}
                      </div>
                    ))}
                </S.SearchSkill>
              )}
            </S.SkillWrap>
            <S.Button onClick={closeModal}>완료</S.Button>
          </S.SearchBox>
        </div>
      </S.Container>
    )
  );
};

export default BoardWriteModal;
