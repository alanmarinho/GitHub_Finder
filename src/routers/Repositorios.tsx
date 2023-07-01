import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { repositorioProps } from "../Types/repositorio";
import { CardRepositorio } from "../components/CardRepositorio";

export const Repositorio: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const user = searchParams.get('user');

  const [repositorios, setRepositorios] = useState<repositorioProps[]>([]);

  const loadRepositorios = async (username: string) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await response.json();
    const repositoriosData = data.map((repo: repositorioProps) => {
      const { name, description, language, stargazers_count, pushed_at, html_url } = repo;
      return { name, description, language, stargazers_count, pushed_at, html_url };
    });
    setRepositorios(repositoriosData);
  };
  
  
  useEffect(() => {
    if (user) {
      loadRepositorios(user);
    }
  }, [user]);
  
  console.log(repositorios);

  return (
    <>
      {repositorios.map((repositorio) => (
        <div key={repositorio.name}>
          <CardRepositorio 
          name={repositorio.name} 
          description={repositorio.description}
          html_url={repositorio.html_url}
          language={repositorio.language}
          pushed_at={repositorio.pushed_at}
          stargazers_count={repositorio.stargazers_count}
          />
        </div>
      ))}
    </>
  );

}
