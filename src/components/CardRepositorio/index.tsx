import { Button } from "../Button/style"
import * as S from "./style"

interface CardRepositorioProps {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  pushed_at: string;
  html_url: string;
}

export const CardRepositorio: React.FC<CardRepositorioProps> = ({ name, description, language, stargazers_count, pushed_at, html_url }) => {
  return (
    <S.Container>
      <h2>{name}</h2>
      <h4>{description}</h4>
      <h4>linguagem principal: {language}</h4>
      <h4>Esquelas: {stargazers_count}</h4>
      <h4>Última atualização: {pushed_at}</h4>
      <a target="_blank" href={html_url}><Button invert={true}>Ver mais no GitHub</Button></a>
    </S.Container>
  )
}