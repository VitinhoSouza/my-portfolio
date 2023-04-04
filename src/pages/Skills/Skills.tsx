import { useTranslation } from "react-i18next";
import { Container, InfoSkills } from "./styles";

export function Skills() {

  const { t } = useTranslation('skills');

  return (
    <Container>
      <InfoSkills key={t('hardSkills')}>
        <h2>{t('hardSkills')}</h2>
        <ul>
            <li key={t('hardSkillsTopics.1')}>{t('hardSkillsTopics.1')}{';'}</li>
            <li key={t('hardSkillsTopics.2')}>{t('hardSkillsTopics.2')}{';'}</li>
            <li key={t('hardSkillsTopics.3')}>{t('hardSkillsTopics.3')}{';'}</li>
            <li key={t('hardSkillsTopics.4')}>{t('hardSkillsTopics.5')}{';'}</li>
            <li key={t('hardSkillsTopics.5')}>{t('hardSkillsTopics.5')}{';'}</li>
            <li key={t('hardSkillsTopics.6')}>{t('hardSkillsTopics.6')}{';'}</li>
            <li key={t('hardSkillsTopics.7')}>{t('hardSkillsTopics.7')}{';'}</li>
            <li key={t('hardSkillsTopics.8')}>{t('hardSkillsTopics.8')}{';'}</li>
            <li key={t('hardSkillsTopics.9')}>{t('hardSkillsTopics.9')}{';'}</li>
            <li key={t('hardSkillsTopics.10')}>{t('hardSkillsTopics.10')}{'.'}</li>
        </ul>
      </InfoSkills>
      <InfoSkills key={t('softSkills')}>
        <h2>{t('softSkills')}</h2>
        <ul>
            <li key={t('softSkillsTopics.1')}>{t('softSkillsTopics.1')}{';'}</li>
            <li key={t('softSkillsTopics.2')}>{t('softSkillsTopics.2')}{';'}</li>
            <li key={t('softSkillsTopics.3')}>{t('softSkillsTopics.3')}{';'}</li>
            <li key={t('softSkillsTopics.4')}>{t('softSkillsTopics.5')}{';'}</li>
            <li key={t('softSkillsTopics.5')}>{t('softSkillsTopics.5')}{';'}</li>
            <li key={t('softSkillsTopics.6')}>{t('softSkillsTopics.6')}{';'}</li>
            <li key={t('softSkillsTopics.7')}>{t('softSkillsTopics.7')}{';'}</li>
            <li key={t('softSkillsTopics.8')}>{t('softSkillsTopics.8')}{';'}</li>
            <li key={t('softSkillsTopics.9')}>{t('softSkillsTopics.9')}{';'}</li>
            <li key={t('softSkillsTopics.10')}>{t('softSkillsTopics.10')}{';'}</li>
            <li key={t('softSkillsTopics.11')}>{t('softSkillsTopics.11')}{'.'}</li>
        </ul>
      </InfoSkills>
    </Container>
  );
}
