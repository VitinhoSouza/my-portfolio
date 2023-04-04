import { useTranslation } from "react-i18next";
import { Container } from "./styles";

interface IRepoCard {
  title: string;
  description: string | null;
  link: string;
}

export function RepoCard({ description, link, title }: IRepoCard) {

  const { t } = useTranslation('projects');

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
        {t('visitOnGithub')}
      </a>
    </Container>
  );
}
