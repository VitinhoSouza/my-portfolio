import { useTranslation } from "react-i18next";

import { Card } from "../../components/Card/Card";

import { Container, InfoEducation } from "./styles";

export function Formation() {
  const { t } = useTranslation("formation");

  return (
    <Container>
      <InfoEducation key={t("practicalExperiences")}>
        <h2>{t("practicalExperiences")}</h2>

        <ul>
          {[5, 4, 3, 2, 1].map((number) => (
            <Card
              key={t(`practicalExperiencesTopics.${number}`)}
              description={
                t(`practicalExperiencesTopics.${number}.description`) ||
                undefined
              }
              title={t(`practicalExperiencesTopics.${number}.title`)}
              descriptionLenght={410}
              width="24.85rem"
              height="19rem"
            />
          ))}
        </ul>
      </InfoEducation>

      <InfoEducation key={t("academicEducation")}>
        <h2>{t("academicEducation")}</h2>
        <ul>
          {[5, 4, 3, 2, 1].map((number) => (
            <Card
              key={t(`academicEducationTopics.${number}`)}
              description={
                t(`academicEducationTopics.${number}.description`) || undefined
              }
              title={t(`academicEducationTopics.${number}.title`)}
              descriptionLenght={410}
              width="24.85rem"
              height="19rem"
            />
          ))}
        </ul>
      </InfoEducation>
    </Container>
  );
}
