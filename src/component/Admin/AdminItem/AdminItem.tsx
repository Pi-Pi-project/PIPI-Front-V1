import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getImgSrc } from "../../../lib/func";
import { adminMainActionCreater } from "../../../module/action/adminMain";
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
  const dispatch = useDispatch();
  const onReportModal = useCallback(() => {
    dispatch(
      adminMainActionCreater.getReportDetailSaga({
        reportedEmail,
        reporterEmail,
        type: "REPORT"
      })
    );
  }, []);
  return (
    <S.Container>
      <div>
        <S.Img src={getImgSrc(profileImg || "")} />
        <S.Span>{userNickname}</S.Span>
        <S.Span>{reportedEmail}</S.Span>
        <S.Span>&lt;ㅡ</S.Span>
        <S.Span>{reporterEmail}</S.Span>
      </div>
      <div>
        <S.Button color="#3B3B3B" onClick={onReportModal}>
          확인
        </S.Button>
        <S.Button color="#3B3B3B">거절</S.Button>
        <S.Button color="#FC2F2F">승낙</S.Button>
      </div>
    </S.Container>
  );
};

export default AdminItem;
