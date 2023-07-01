import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.sizes.xs};
  padding: ${props => props.theme.sizes.xs};
  margin: ${props => props.theme.sizes.xxs};
  width: 500px;
  @media (max-width: 400px) {
    width: 300px;
  }
`