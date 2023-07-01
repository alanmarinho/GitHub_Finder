import { Switch } from '../Switch/index'
import * as S from './style'
import { Link } from 'react-router-dom'

interface Props {
  toggleTheme(): void
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <S.Container>
      <Link to={"/"}><S.LogoContainer><img src='Assets\Ivory.png' /></S.LogoContainer></Link>
      <S.MenuContainer>
        <Link to={"/"}><S.MenuButton>Home</S.MenuButton></Link>
        <Switch onChange={toggleTheme} />
      </S.MenuContainer>
    </S.Container>
  )
}
