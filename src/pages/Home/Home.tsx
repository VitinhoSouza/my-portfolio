import { useEffect, useState } from "react";
import description from "../../assets/description.json";
import { Container, ContainerImage, ContainerDescription } from "./styles";

export function Home() {

  const [image, setImage] = useState("https://www.shutterstock.com/image-vector/programmer-icon-single-avatar-vector-260nw-2073604823.jpg");

  useEffect(() => {
    fetch("https://api.github.com/users/VitinhoSouza")
      .then((data) => data.json())
      .then((data) => {
        data?.avatar_url && setImage(data.avatar_url);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <ContainerImage className="image">
        <img src={image} alt="Victor" />
      </ContainerImage>
      <ContainerDescription className="description">
        <h1>{description.question}</h1>
        <p>{description.desc}</p>
      </ContainerDescription>
    </Container>
  );
}
