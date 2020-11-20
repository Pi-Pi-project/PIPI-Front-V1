import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 40px;
  border-bottom: 1px solid #707070;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
`;

export const Span = styled.span`
  font-size: 20px;
  margin-left: 10px;
  font-weight: bold;
`;

export const Button = styled.button<{ color: string }>`
  background: none;
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  font-size: 18px;
  border-radius: 10px;
  padding: 3px 7px;

  & + & {
    margin-left: 10px;
  }
`;
