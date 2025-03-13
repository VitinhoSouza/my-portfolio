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

  const academicEducationTopics = t("academicEducationTopics")?.split(";");

  return (
    <Container>
      <InfoEducation key={t("academicEducation")}>
        <h2>{t("academicEducation")}</h2>
        <ul>
          {academicEducationTopics?.map((topic) => (
            <Card
              key={topic}
              title={topic}
              description={null}
              descriptionLenght={0}
              width="25rem"
            />
          ))}
        </ul>
      </InfoEducation>

      <InfoExperienceContainer key={t("practicalExperiences")}>
        <h2>{t("practicalExperiences")}</h2>

        <InfoExperience>
          {[1, 2, 3, 4, 5].map((number) => (
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
