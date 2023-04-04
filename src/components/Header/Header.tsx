import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import { useTranslation } from "react-i18next";

import i18n from "../../translate/i18n";

import { Container, Menu, PersonalData } from "./styles";

interface IHeaderProps {
  toggleTheme: () => void;
}

export function Header({ toggleTheme }: IHeaderProps) {
  const { colors, title } = useContext(ThemeContext);

  const { t } = useTranslation('header');

  const handleLanguage = (event: any) => {
    event.preventDefault();
    const language = event.target.value;
    i18n.changeLanguage(language);
  }

  return (
    <Container>
      <PersonalData>
        <span className="title">Vitinho</span>
        <span>{t('office')}</span>
      </PersonalData>

      <Menu>
        <NavLink
          to="/"
          // className={(navData) => (navData.isActive ? "active" : "")}
        >
          {t('homeTitle')}
        </NavLink>
        <NavLink to="/formation">{t('formationTitle')}</NavLink>
        <NavLink to="/skills">{t('skillsTitle')}</NavLink>
        <NavLink to="/projects">{t('projectsTitle')}</NavLink>
      </Menu>

      <Switch
        className={title === "dark" ? "toggleTheme active" : "toggleTheme"}
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={22}
        offColor={colors.background}
        onColor={shade(0.4, colors.primary)}
      />

      <select
        defaultValue={i18n.language} onChange={handleLanguage}
      >
          <option value="pt">Português</option>
          <option value="en">English</option>
      </select>
    </Container>
  );
}
