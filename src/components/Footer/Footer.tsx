import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  GoogleLogo,
} from "phosphor-react";

import { Container, Copyright, SocialNetworks } from "./styles";

export function Footer() {
  return (
    <Container>
      <Copyright>Copyright © 2022 VitinhoSouza. All Rights Reserved</Copyright>
      <SocialNetworks>
        <a href="https://github.com/VitinhoSouza" style={{ color: "white" }}>
          <GithubLogo size="2rem" alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/victor-souza-1419b21ab/"
          style={{ color: "white" }}
        >
          <LinkedinLogo size="2rem" alt="Linkedin" />
        </a>
        <a
          href="https://www.instagram.com/vitiinho_souzza/"
          style={{ color: "white" }}
        >
          <InstagramLogo size="2rem" alt="Instagram" />
        </a>
        <a
          href="mailto:vitinhosouzajuatama@gmail.com"
          style={{ color: "white" }}
        >
          <GoogleLogo size="2rem" alt="Gmail" />
        </a>
      </SocialNetworks>
    </Container>
  );
}
