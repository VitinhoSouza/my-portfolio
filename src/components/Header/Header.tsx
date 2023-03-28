import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { Container, Menu, PersonalData } from "./styles";

interface IHeaderProps {
  toggleTheme: () => void;
}

export function Header({ toggleTheme }: IHeaderProps) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <PersonalData>
        <span className="title">Vitinho</span>
        <span>Web Developer (Frontend)</span>
      </PersonalData>

      <Menu>
        <NavLink
          to="/"
          // className={(navData) => (navData.isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink to="/formation">Formation</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
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
    </Container>
  );
}
