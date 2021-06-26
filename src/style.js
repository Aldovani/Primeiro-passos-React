import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 70px;
  background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);


`;

export const Count = styled.div`
  border: 0;
  height: 50px;
  text-align: center;
  font-size: 50px;
`;

export const InputNumber = styled.input`
  border: 0;
  text-align: center;
  font-size: min(100%);
  width: 300px;
  background: transparent;



&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  border: 0;
  height: 50px;
  width: 10rem;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.5s;

  &:hover {
   transform: translateY(-5px);
  }

  ${(props) =>
    props.add &&
    css`
      background-color:#99ff99;
    `}
  ${(props) =>
    props.remove &&
    css`
      background-color:#ff4d4d
    `}
${(props) =>
    props.reset &&
    css`
      background-color:#ffff00;
    `}
`;
