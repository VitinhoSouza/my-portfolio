import { useEffect, useMemo, useState } from "react";
import { Card } from "../../components/Card/Card";

import { Container, ContainerRepos, SearchInput } from "./styles";

import loader from "../../assets/loader.gif";
import { useTranslation } from "react-i18next";

const blockRepos = ["VitinhoSouza"];

export function Projects() {
  const { t } = useTranslation("projects");
  const [allProjects, setAllProjects] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/${blockRepos}/repos?per_page=100`)
      .then((data) => data.json())
      .then((repos) => {
        let publicRepos: any = [];
        repos.forEach((repo: any) => {
          if (!blockRepos.includes(repo.name)) publicRepos.push(repo);
        });
        setAllProjects(publicRepos);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredProjects = useMemo(() => {
    if (!search.trim()) return allProjects;

    const searchLower = search.toLowerCase();

    return allProjects.filter((project) => {
      return (
        project.name.toLowerCase().includes(searchLower) ||
        project.description?.toLowerCase().includes(searchLower)
      );
    });
  }, [search, allProjects]);

  return (
    <Container>
      <SearchInput
        type="text"
        placeholder={t("searchPlaceholder") || ""}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ContainerRepos>
        {allProjects.length === 0 ? (
          <img src={loader} alt="loader with dots" />
        ) : filteredProjects.length === 0 ? (
          <p>{t("noProjectsFound")}</p>
        ) : (
          filteredProjects.map((project: any) => (
            <Card
              key={project.id}
              title={project.name}
              description={project.description}
              descriptionLenght={110}
              link={project.html_url}
            />
          ))
        )}
      </ContainerRepos>
    </Container>
  );
}
