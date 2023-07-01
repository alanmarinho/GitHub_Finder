import styled from 'styled-components';
import { shade } from 'polished'

type ButtonProps = {
  invert?: boolean;
}

export const Button = styled.button<ButtonProps>`

  background-color: ${ButtonProps => ButtonProps.invert ? ButtonProps.theme.colors.primary : ButtonProps.theme.colors.secondary};;
  padding: ${({ theme }) => theme.sizes.xxs};
  border-radius: ${({ theme}) =>  theme.sizes.xxs};
  border-color: ${ButtonProps => ButtonProps.invert ? ButtonProps.theme.colors.primary : ButtonProps.theme.colors.secondary};
  transition: .1s;
  font-weight: bold; 
  width: 100%;
  color: ${({ theme }) => theme.colors.text_white};
  border: none/*${({ theme }) => shade(.9, theme.colors.secondary)}  1px double*/;
  
  &:hover{
    background-color: ${({ theme }) => shade(0.2, theme.colors.secondary)};
    transform: scale(1.05);
  }

  &:active{
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: scale(0.95);
  }
  `

export const Container = styled.div`
  padding: ${({ theme }) => theme.sizes.xxs};
`