import styled from "styled-components";

interface Props {
  $inputColor: string;
  $bgColor: boolean;
}

export const Button = styled.button<Props>`
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  font-weight: 600;
  margin: 0 10px;
  width: 200px;
  height: fit-content;
  padding: 10px 0;
  box-shadow: 0 0 20px rgba(104, 85, 224, 0.2);
  transition: 0.4s;
  color: ${(props) => props.$inputColor};
  background-color: ${(props) => (props.$bgColor ? "#6855E0" : "white")};
  &:hover {
    color: white;
    box-shadow: 0 0 20px rgba(104, 85, 224, 0.6);
    background-color: rgba(104, 85, 224, 1);
  }
`;
