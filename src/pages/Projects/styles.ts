import styled from "styled-components";

export const Container = styled.main`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  gap: 1rem;
  padding: 1rem 0.5rem;
`;

export const ContainerRepos = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  gap: 1rem;
  padding: 1rem 0.5rem;

  p {
    color: ${({ theme }) => theme.colors.text_background};
  }
`;

export const SearchInput = styled.input`
  width: 10rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: none;
  outline: none;

  background: ${({ theme }) => theme.colors.background_card};
  color: ${({ theme }) => theme.colors.text_card};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text_card};
    opacity: 0.6;
  }
`;
