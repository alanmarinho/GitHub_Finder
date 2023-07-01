import { styled } from "styled-components"

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.text_black};
  border-radius: ${({ theme }) => theme.sizes.xs};
  border: none;
  padding: ${({ theme }) => theme.sizes.xxs};
  margin: ${({ theme }) => theme.sizes.xxs};
  width: 90%;
  color: ${({ theme }) => theme.colors.primary};

  &:focus{
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; 
`
export const Form = styled.form`

`