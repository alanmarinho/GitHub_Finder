import { userProps } from "../../Types/user"
import { Title } from "../Title/index"
import { Avatar } from "../Avatar/index"
import * as S from "./style"
import Button from "../Button/index"
import { Link } from "react-router-dom"


export const User = ({ avatar_url, bio, followers, following, location, login, name }: userProps) => {

  return (
    <S.Container>
      <Avatar url_image={avatar_url} />
      <Title>{name}</Title>
      <h2>{login}</h2>
      {bio ?? <p>{bio}</p>}
      {location ?? <p>{location}</p>}
      <p>Seguidores: {followers}</p>
      <p>Seguindo: {following}</p>
      <Link to={{ pathname: '/repositorios', search: `?user=${login}` }}>
        <Button invert={true}>Ver repositórios</Button> {/* Passar a função de clique no botão */}
      </Link>
    </S.Container>
  )
}

