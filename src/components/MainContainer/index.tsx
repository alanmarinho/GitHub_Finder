import * as S from './style'

type MainContainerProps = {
  children?: React.ReactNode
}

export const MainContainer: React.FC<MainContainerProps> = ({children}) => {
  return(
    <S.Container>{children}</S.Container>
  )
}