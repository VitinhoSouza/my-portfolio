import formationInfo from "../../assets/formation.json";
import { Container, InfoEducationOrExperience } from "./styles";

interface IInfo {
  title: string;
  topics: string[];
}

export function Formation() {
  return (
    <Container>
      {formationInfo.map((info: IInfo) => (
        <InfoEducationOrExperience key={info.title}>
          <h2>{info.title}</h2>
          <ul>
            {info.topics.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </InfoEducationOrExperience>
      ))}
    </Container>
  );
}
