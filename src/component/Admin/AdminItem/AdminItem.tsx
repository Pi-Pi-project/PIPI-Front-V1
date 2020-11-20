import React, { FC } from "react";
import * as S from "./styles";

const AdminItem: FC = () => {
  return (
    <S.Container>
      <div>
        <S.Img src="https://lh3.googleusercontent.com/proxy/qzXgRq0cSpQRIbEyepp46OwAF9YscV1eakFcNKolFZ_rOJH9TDRSMXhdxsbvDexMm4hJ2A8B0_6FAxhCNIPW8pHvQzvxzeRLM4Q4fopcJTjx1eYaW_r6T12yRBtNXQkGzymtYefpxoQ5W1tySeQ7SG5_6T-38ejWyaL29sD7ode0uhClLkYcWmnZbLRyXA" />
        <S.Span>불건전한닉네임</S.Span>
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
