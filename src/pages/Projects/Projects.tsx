import { useEffect, useState } from "react";
import { RepoCard } from "../../components/RepoCard/RepoCard";

import { Container } from "./styles";

import loader from "../../assets/loader.gif";

const blockRepos = ["VitinhoSouza"];

export function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/VitinhoSouza/repos")
      .then((data) => data.json())
      .then((repos) => {
        let publicRepos: any = [];
        repos.forEach((repo: any) => {
          if (!blockRepos.includes(repo.name)) publicRepos.push(repo);
        });
        setProjects(publicRepos);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      {projects.length === 0 ? (
        <img src={loader} alt="loader with dots"/>
      ):(
        projects.map((project: any) => (
          <RepoCard
            description={project.description}
            link={project.html_url}
            title={project.name}
            key={project.id}
          />
        ))
      )}
      
    </Container>
  );
}
