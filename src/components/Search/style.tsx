import { styled } from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.sizes.xs};
  border-radius: ${({ theme }) => theme.sizes.xxs};
  text-align: center;
  width: 22rem;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.sizes.xxl};
  
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.sizes.sm};
`;

export const Paragraph = styled.p`
  /* font-size: ${({ theme }) => theme.sizes.xs}; */
`;