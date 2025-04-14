import { useTranslation } from "react-i18next";
import { Container, InfoSkills } from "./styles";
import { Card } from "../../components/Card/Card";

export function Skills() {
  const { t } = useTranslation("skills");

  return (
    <Container>
      <InfoSkills key={t("hardSkills")}>
        <h2>{t("hardSkills")}</h2>
        <Card title="" width="30rem">
          <ul>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
              <li key={t(`hardSkillsTopics.${number}`)}>
                {t(`hardSkillsTopics.${number}`)}
                {number === 10 ? "." : ";"}
              </li>
            ))}
          </ul>
        </Card>
      </InfoSkills>
      <InfoSkills key={t("softSkills")}>
        <h2>{t("softSkills")}</h2>
        <Card title="" width="30rem">
          <ul>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((number) => (
              <li key={t(`softSkillsTopics.${number}`)}>
                {t(`softSkillsTopics.${number}`)}
                {number === 11 ? "." : ";"}
              </li>
            ))}
          </ul>
        </Card>
      </InfoSkills>
    </Container>
  );
}
