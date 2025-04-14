import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding: 2rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 980px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const InfoSkills = styled.div`
  height: 100%;
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h2 {
    margin-bottom: 1rem;
  }

  ul {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    li {
      font-size: 1.3rem;
    }
  }
`;
