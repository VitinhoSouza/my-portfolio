import description from "../../assets/description.json";
import personalImage from "../../assets/Victor.jpg";
import { Container, ContainerImage, ContainerDescription } from "./styles";

export function Home() {
  return (
    <Container>
      <ContainerImage className="image">
        <img src={personalImage} alt="Victor" />
      </ContainerImage>
      <ContainerDescription className="description">
        <h1>Quem sou eu?</h1>
        <p>{description.desc}</p>
      </ContainerDescription>
    </Container>
  );
}
