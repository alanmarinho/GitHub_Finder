import * as S from './style';

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  invert?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, type = "button", onClick, invert = false}) => {
  return (
    <S.Container>
        <S.Button invert={invert} type={type} onClick={onClick}>{ children }</S.Button>
    </S.Container>
  )
}

export default Button;
