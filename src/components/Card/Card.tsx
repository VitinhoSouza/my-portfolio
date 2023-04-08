import { useTranslation } from "react-i18next";
import { Container } from "./styles";

interface IRepoCard {
  title: string;
  description: string | null;
  descriptionLenght: number;
  link?: string;
  width?: string;
  height?: string;
}

export function Card({
  description,
  link,
  title,
  descriptionLenght,
  width,
  height,
}: IRepoCard) {
  const { t } = useTranslation("projects");

  return (
    <Container width={!!width ? width : ""} height={!!height ? height : ""}>
      <h3>{title}</h3>

      <span
        title={
          description !== null && description.length > descriptionLenght
            ? description
            : ""
        }
      >
        {description !== null && description.length > descriptionLenght
          ? description.slice(0, descriptionLenght) + "..."
          : description}
      </span>

      {!!link && (
        <a href={link} target="_blank" rel="noreferrer">
          {t("visitOnGithub")}
        </a>
      )}
    </Container>
  );
}
