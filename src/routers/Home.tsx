import { useState } from "react";
import { Search } from "../components/Search/index";
import { Title } from '../components/Title/index';
import { userProps } from '../Types/user'
import { User } from "../components/Usuario/index";
import { Erro } from "../components/Erro/index";

export const Home = () => {
  const [user, setUser] = useState<userProps | null>(null);
  const [erro, setErro] = useState(false);

  const loadUser = async (username: string) => {
    setUser(null);
    setErro(false);

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setUser(data);

    if (response.status === 404) {
      setErro(true);
      return;
    }

    const { avatar_url, location, name, login, bio, followers, following } = data;
    const userData: userProps = { avatar_url, location, name, login, bio, followers, following };
    setUser(userData);
  }

  return (
    <>
      <Title>GitHub Finder</Title>
      <Search loadUser={loadUser}></Search>
      {user && !erro && <User {...user} />}
      {erro && <Erro />}
    </>
  )
}
