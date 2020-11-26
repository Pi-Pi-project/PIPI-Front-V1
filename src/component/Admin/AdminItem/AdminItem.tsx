import React, { FC } from "react";
import { getImgSrc } from "../../../lib/func";
import {
  ProjectApplyItem,
  ReportItem
} from "../../../module/reducer/AdminMain";
import * as S from "./styles";

interface Props {
  profileImg: string;
  reportedEmail: string;
  reporterEmail: string;
  userNickname: string;
}
const AdminItem: FC<Props> = ({
  profileImg,
  reportedEmail,
  reporterEmail,
  userNickname
}) => {
  return (
    <S.Container>
      <div>
        <S.Img src={getImgSrc(profileImg || "")} />
        <S.Span>{userNickname}</S.Span>
      </div>
      <div>
        <S.Button color="#3B3B3B">확인</S.Button>
        <S.Button color="#3B3B3B">거절</S.Button>
        <S.Button color="#FC2F2F">승낙</S.Button>
      </div>
    </S.Container>
  );
};

export default AdminItem;
