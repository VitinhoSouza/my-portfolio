import { useTranslation } from "react-i18next";

import { Container, InfoEducationOrExperience } from "./styles";

export function Formation() {

  const { t } = useTranslation('formation');

  return (
    <Container>
      <InfoEducationOrExperience key={t('academicEducation')}>
        <h2>{t('academicEducation')}</h2>
        <ul>
          <li key={t('academicEducationTopics.1')}>{t('academicEducationTopics.1')}</li>
          <li key={t('academicEducationTopics.2')}>{t('academicEducationTopics.2')}</li>
          <li key={t('academicEducationTopics.3')}>{t('academicEducationTopics.3')}</li>
          <li key={t('academicEducationTopics.4')}>{t('academicEducationTopics.4')}</li>
        </ul>
      </InfoEducationOrExperience>

      <InfoEducationOrExperience key={t('practicalExperiences')}>
        <h2>{t('practicalExperiences')}</h2>
        <ul>
          <li key={t('practicalExperiencesTopics.1')}>{t('practicalExperiencesTopics.1')}</li>
          <li key={t('practicalExperiencesTopics.2')}>{t('practicalExperiencesTopics.2')}</li>
          <li key={t('practicalExperiencesTopics.3')}>{t('practicalExperiencesTopics.3')}</li>
          <li key={t('practicalExperiencesTopics.4')}>{t('practicalExperiencesTopics.4')}</li>
          <li key={t('practicalExperiencesTopics.5')}>{t('practicalExperiencesTopics.5')}</li>
        </ul>
      </InfoEducationOrExperience>
    </Container>
  );
}
