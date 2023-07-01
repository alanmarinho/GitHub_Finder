import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  bottom: ${({ theme }) => theme.sizes.xxl};
  color: ${({ theme }) => theme.colors.text_white};
`