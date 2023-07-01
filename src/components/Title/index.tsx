import * as S from './style'

interface TitleProps{
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({children}) => {
  return(
    <S.Container>
      <S.Title>{children}</S.Title>
    </S.Container>
  );
}