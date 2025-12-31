import { useTranslation } from "react-i18next";
import { Container, ToggleButton } from "./styles";
import { ReactNode, useState } from "react";

interface ICard {
  title: string;
  description?: string;
  descriptionLenght?: number;
  link?: string;
  width?: string;
  height?: string;
  children?: ReactNode;
  collapsible?: boolean;
}

export function Card({
  description = "",
  link,
  title,
  descriptionLenght = 0,
  width,
  height,
  children,
  collapsible = false,
}: ICard) {
  const { t } = useTranslation("projects");
  const [isOpen, setIsOpen] = useState(!collapsible);

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
    <Container
      width={width ?? ""}
      height={height ?? ""}
      isOpen={isOpen}
      collapsible={collapsible}
    >
      <h3>
        {title}{" "}
        {collapsible && (
          <ToggleButton onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? `${t("showLess")} ▲` : `${t("showMore")} ▼`}
          </ToggleButton>
        )}
      </h3>

      <div className="content">
        {!!description && (
          <span
            title={description.length > descriptionLenght ? description : ""}
          >
            {description.length > descriptionLenght
              ? description.slice(0, descriptionLenght) + "..."
              : description}
          </span>
        )}

        {!!link && (
          <a href={link} target="_blank" rel="noreferrer">
            {t("visitOnGithub")}
          </a>
        )}
      </div>
    </Container>
  );
}
