import { useTranslation } from "react-i18next";
import { Container } from "./styles";
import { ReactNode } from "react";

interface ICard {
  title: string;
  description?: string;
  descriptionLenght?: number;
  link?: string;
  width?: string;
  height?: string;
  children?: ReactNode;
}

export function Card({
  description = "",
  link,
  title,
  descriptionLenght = 0,
  width,
  height,
  children,
}: ICard) {
  const { t } = useTranslation("projects");


  //Variant 1 = withChildren
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

  //Variant2 - withTitle
  return (
    <Container width={!!width ? width : ""} height={!!height ? height : ""}>
      <h3>{title}</h3>

      {!!description && (
        <span
          title={
            description?.length > descriptionLenght
              ? description
              : ""
          }
        >
          {description?.length > descriptionLenght
            ? description.slice(0, descriptionLenght) + "..."
            : description}
        </span>
      )}

      {!!link && (
        <a href={link} target="_blank" rel="noreferrer">
          {t("visitOnGithub")}
        </a>
      )}
    </Container>
  );
}
