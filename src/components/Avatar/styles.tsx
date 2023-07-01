import { styled } from 'styled-components';

export const Container = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: #ccc;
  overflow: hidden;
  display: flex;
  align-items: center;  
  justify-content: center;
  text-align: center;
  
  `
export const Borda = styled.div`
  width: 10.5rem;
  height: 10.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;  
  justify-content: center;
`
export const Image = styled.img`
  width: 100%;
  height:auto;

  /*object-fit: cover; */

`