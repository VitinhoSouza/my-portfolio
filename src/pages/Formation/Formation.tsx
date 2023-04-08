import { useTranslation } from "react-i18next";

import { Card } from "../../components/Card/Card";

import {
  Container,
  InfoEducation,
  InfoExperience,
  InfoExperienceContainer,
} from "./styles";

export function Formation() {
  const { t } = useTranslation("formation");

  return (
    <Container>
      <InfoEducation key={t("academicEducation")}>
        <h2>{t("academicEducation")}</h2>
        <ul>
          <li key={t("academicEducationTopics.1")}>
            {t("academicEducationTopics.1")}
          </li>
          <li key={t("academicEducationTopics.2")}>
            {t("academicEducationTopics.2")}
          </li>
          <li key={t("academicEducationTopics.3")}>
            {t("academicEducationTopics.3")}
          </li>
          <li key={t("academicEducationTopics.4")}>
            {t("academicEducationTopics.4")}
          </li>
        </ul>
      </InfoEducation>

      <InfoExperienceContainer key={t("practicalExperiences")}>
        <h2>{t("practicalExperiences")}</h2>

        <InfoExperience>
          {[1, 2, 3, 4].map((number) => (
            <Card
              key={t(`practicalExperiencesTopics.${number}`)}
              description={t(
                `practicalExperiencesTopics.${number}.description`
              )}
              title={t(`practicalExperiencesTopics.${number}.title`)}
              descriptionLenght={400}
              width="25rem"
              height="18rem"
            />
          ))}
        </InfoExperience>
      </InfoExperienceContainer>
    </Container>
  );
}
