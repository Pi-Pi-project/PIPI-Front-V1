import React, { FC } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pipiLogoSvg } from "../../asset";
import { BASE_IMG_URL } from "../../lib/api";
import { navigationActionCreater } from "../../module/action/navigation";
import { StoreType } from "../../module/reducer";
import { LoginedContainer } from "../../style/GlobalStyle";
import * as S from "./styles";

const Navigation: FC = () => {
  const dispatch = useDispatch();
  const { email, profileImg } = useSelector(
    (store: StoreType) => store.navigation
  );
  useEffect(() => {
    dispatch(navigationActionCreater.getUserInfoSaga());
  }, []);
  return (
    <S.Container>
      <LoginedContainer>
        <div>
          <S.ImgCircle src={pipiLogoSvg} />
          <S.LogoText>PiPi</S.LogoText>
        </div>
        <S.ImgCircle src={`${BASE_IMG_URL}/${profileImg}`} />
      </LoginedContainer>
    </S.Container>
  );
};

export default Navigation;
