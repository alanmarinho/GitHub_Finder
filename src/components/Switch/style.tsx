import styled from "styled-components";
import { shade } from 'polished'

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`

export const Switch = styled.div`
 position: relative;
  width: 40px;
  height: 10px;
  background: ${({ theme }) => shade(0.15, theme.colors.primary)};
  border-radius: 32px;
  padding: 2px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 35px;
    top: 50%;
    left: 0;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input`
display: none;

&:checked + ${Switch} {
  background: ${({ theme }) => theme.colors.secondary};

  &:before {
    transform: translate(20px, -50%);
  }
}
`;