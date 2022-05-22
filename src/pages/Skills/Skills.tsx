import skillsInfo from "../../assets/skills.json";
import { Container, InfoSkills } from "./styles";

interface IInfo {
  title: string;
  topics: string[];
}

export function Skills() {
  return (
    <Container>
      {skillsInfo.map((skill: IInfo) => (
        <InfoSkills key={skill.title}>
          <h2>{skill.title}</h2>
          <ul>
            {skill.topics.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </InfoSkills>
      ))}
    </Container>
  );
}
