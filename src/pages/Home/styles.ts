import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ContainerImage = styled.div`
  height: 30%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  img {
    width: 14.5rem;
    border-radius: 9999px;
    object-fit: cover;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ContainerDescription = styled.div`
  white-space: pre-line;
  width: 90vw;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.5rem;
  }
`;
