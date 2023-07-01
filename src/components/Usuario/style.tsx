import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-radius: ${({ theme }) => theme.sizes.xxs};
  padding: ${({ theme }) => theme.sizes.xxl};
  background-color: ${({ theme }) => theme.colors.secondary};
  gap: ${({ theme }) => theme.sizes.xs};
  min-width: 350px;
`