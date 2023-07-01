import { styled } from "styled-components"

export const Container = styled.div`
  margin: ${({ theme }) => theme.sizes.xs};
  padding: ${({ theme }) => theme.sizes.xxs};
  text-align: center;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.sizes.xl};
`