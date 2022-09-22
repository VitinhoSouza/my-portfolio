import { Container } from "./styles";

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
          description !== null && description.length > 120
            ? description
            : ""
        }
      >
        {description !== null && description.length > 120
          ? description.slice(0, 120) + "..."
          : description}
      </span>
      <a href={link}>Visit on Github</a>
    </Container>
  );
}
