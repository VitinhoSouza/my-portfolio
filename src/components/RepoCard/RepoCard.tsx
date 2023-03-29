import { Container } from "./styles";

import projects from "../../assets/projects.json";

interface IRepoCard {
  title: string;
  description: string | null;
  link: string;
}

export function RepoCard({ description, link, title }: IRepoCard) {
  return (
    <Container>
      <h3>{title}</h3>

      <span
        title={
          description !== null && description.length > 110
            ? description
            : ""
        }
      >
        {description !== null && description.length > 110
          ? description.slice(0, 110) + "..."
          : description}
      </span>
      
      <a href={link} target="_blank" rel="noreferrer">
        {projects.visitOnGithub}
      </a>
    </Container>
  );
}
