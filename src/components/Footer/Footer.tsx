import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  GoogleLogo,
} from "phosphor-react";

import { Container, Copyright, SocialNetworks } from "./styles";
import { useTranslation } from "react-i18next";

export function Footer() {

  const { t } = useTranslation('footer');

  return (
    <Container>
      <Copyright>{t('copyright')}</Copyright>
      <SocialNetworks>
        <a
          href="https://github.com/VitinhoSouza"
          style={{ color: "white" }}
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo size="2rem" alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/victor-souza-1419b21ab/"
          style={{ color: "white" }}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinLogo size="2rem" alt="Linkedin" />
        </a>
        <a
          href="https://www.instagram.com/vitiinho_souzza/"
          style={{ color: "white" }}
          target="_blank"
          rel="noreferrer"
        >
          <InstagramLogo size="2rem" alt="Instagram" />
        </a>
        <a
          href="mailto:vitinhosouzajuatama@gmail.com"
          style={{ color: "white" }}
          target="_blank"
          rel="noreferrer"
        >
          <GoogleLogo size="2rem" alt="Gmail" />
        </a>
      </SocialNetworks>
    </Container>
  );
}
