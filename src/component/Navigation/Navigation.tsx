import React, { FC } from "react";
import { pipiLogoSvg } from "../../asset";
import { LoginedContainer } from "../../style/GlobalStyle";
import * as S from "./styles";

const Navigation: FC = () => {
  return (
    <S.Container>
      <LoginedContainer>
        <div>
          <S.ImgCircle src={pipiLogoSvg} />
          <S.LogoText>PiPi</S.LogoText>
        </div>
        <S.ImgCircle
          src={
            "https://lh3.googleusercontent.com/proxy/Slcpctf2dJOygMOtoDy88x6wThyVMqxYwubzdfBXWUmC8KWKHHc5WAhWy7o-yyxZHk1uzZK-66SIYcmXH19kb0bzvKtCIPZ1ydOGuZCeSHHRN72_gQ"
          }
        />
      </LoginedContainer>
    </S.Container>
  );
};

export default Navigation;
