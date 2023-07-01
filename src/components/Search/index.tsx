import * as S from './style'
import * as C from '../SearchInput/index'

type searchProps = {
  loadUser: (userName: string) => Promise<void> 
}

export const Search: React.FC<searchProps> = ({loadUser}) => {
  return (
    <S.Container>
      <S.Title>Busque por um usuário:</S.Title>
      <S.Paragraph>Conheça seus melhores repositórios</S.Paragraph>
      <C.SearchInput loadUser={loadUser}></C.SearchInput>
    </S.Container>
  )
}