import React, { FC, useCallback } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { pipiLogoSvg } from "../../asset";
import { getImgSrc } from "../../lib/func";
import { navigationActionCreater } from "../../module/action/navigation";
import { StoreType } from "../../module/reducer";
import { LoginedContainer } from "../../style/GlobalStyle";
import * as S from "./styles";

const Navigation: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { email, profileImg } = useSelector(
    (store: StoreType) => store.navigation
  );
  useEffect(() => {
    dispatch(navigationActionCreater.getUserInfoSaga());
  }, []);

  const gotoProfile = useCallback(() => {
    history.push(`/board/profile?email=${email}`);
  }, [email]);

  const gotoMain = useCallback(() => {
    history.push("/board/list");
  }, []);
  return (
    <S.Container>
      <LoginedContainer>
        <div onClick={gotoMain}>
          <S.ImgCircle src={pipiLogoSvg} />
          <S.LogoText>PiPi</S.LogoText>
        </div>
        <S.ImgCircle onClick={gotoProfile} src={getImgSrc(profileImg)} />
      </LoginedContainer>
    </S.Container>
  );
};

export default Navigation;
