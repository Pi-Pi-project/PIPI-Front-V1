import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { checkIsLogin, logOut } from "../../../lib/api";
import { StoreType } from "../../../module/reducer";
import { LoginedContainer } from "../../../style/GlobalStyle";
import ApplyDetailModal from "../../Modal/ApplyDetailModal";
import AdminItem from "../AdminItem/AdminItem";
import ProjectAdminItem from "../AdminItem/ProjectAdminItem";
import * as S from "./styles";

const AdminMain: FC = () => {
  const history = useHistory();
  const { projects, reports } = useSelector(
    (store: StoreType) => store.adminMain
  );

  useEffect(() => {
    checkIsLogin().then(isLogin => {
      !isLogin && history.push("/admin/login");
    });
  }, []);

  return (
    <S.Container>
      <S.AdminHeader>
        <LoginedContainer>
          <div>
            <S.ProjectName color="#53AF9E">PiPi</S.ProjectName>
            <S.ProjectName color="#3b3b3b"> ADMIN</S.ProjectName>
          </div>
          <div>
            <S.Button onClick={logOut}>로그아웃</S.Button>
          </div>
        </LoginedContainer>
      </S.AdminHeader>
      <S.Main>
        <S.Half>
          <S.Title>Report Log</S.Title>
          <S.ListWrap>
            {reports.map(
              ({ userNickname, reporterEmail, reportedEmail, profileImg }) => (
                <AdminItem
                  key={reportedEmail + reporterEmail}
                  userNickname={userNickname}
                  reporterEmail={reporterEmail}
                  reportedEmail={reportedEmail}
                  profileImg={profileImg}
                />
              )
            )}
          </S.ListWrap>
        </S.Half>
        <S.Half>
          <S.Title>Application for Completion Log</S.Title>
          <S.ListWrap>
            {projects.map(data => (
              <ProjectAdminItem {...data} key={data.projectId} />
            ))}
          </S.ListWrap>
        </S.Half>
      </S.Main>
      <ApplyDetailModal />
    </S.Container>
  );
};

export default AdminMain;
