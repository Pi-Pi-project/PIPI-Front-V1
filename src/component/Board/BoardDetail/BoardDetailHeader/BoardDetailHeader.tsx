import React, { FC } from "react";
import * as S from "../styles";

const BoardDetailHeader: FC = () => {
  return (
    <S.BoardDetailHeader>
      <S.ProjectName>프로젝트A</S.ProjectName>
      <S.ProfileWrap>
        <S.ProfileImg src="https://lh3.googleusercontent.com/proxy/8vnCF9RVK-vnTvRtqzcybi-EIM2vmLWh-DTh91UgHYrj1gBpC1ZBZEZLXnPdS7BIA7cEH96L_qk61CM97ZYLbBEpadgMGUTiFpqSIMKpwlyPEAmaXlOOAmXR2ENUvvBO6jDqZu11LqYLe3Hn5i4-Ea7R7JlHslJ_77S8ITv9gjorUQt5IDvD4s6-Ty_SRQ" />
        <S.ProfileName>DSMUSER1</S.ProfileName>
      </S.ProfileWrap>
    </S.BoardDetailHeader>
  );
};

export default BoardDetailHeader;
