import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: ${({ theme }) => theme.sizes.xxxl};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text_white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.xs};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.sizes.sm};
  background-color: transparent;
  cursor: pointer;
  z-index: 1;

  img {
    width: ${({ theme }) => theme.sizes.xl};
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.xl};
  margin-right: ${({ theme }) => theme.sizes.xxs};
`;

export const MenuButton = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors.text_white};
  font-size: ${({ theme }) => theme.sizes.xs};
  background-color: transparent;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
