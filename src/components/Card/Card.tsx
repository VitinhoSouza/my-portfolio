import { useTranslation } from "react-i18next";
import { Container } from "./styles";
import { ReactNode } from "react";

interface IRepoCard {
  title: string;
  description: string | null;
  descriptionLenght: number;
  link?: string;
  width?: string;
  height?: string;
  children?: ReactNode;
}

export function Card({
  description,
  link,
  title,
  descriptionLenght,
  width,
  height,
  children,
}: IRepoCard) {
  const { t } = useTranslation("projects");

  if (!!children) {
    return (
      <Container
        width={!!width ? width : "auto"}
        height={!!height ? height : "auto"}
      >
        {children}
      </Container>
    );
  }

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
