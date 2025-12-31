import styled from "styled-components";

type CardContainerProps = {
  width: string;
  height: string;
  isOpen?: boolean;
  collapsible?: boolean;
};

export const Container = styled.div<CardContainerProps>`
  background: black;

  height: ${(props) =>
    props.collapsible
      ? props.isOpen
        ? props.height || "auto"
        : "auto"
      : props.height || "11rem"};
  width: ${(props) => (props.width ? props.width : "20rem")};

  padding: 1rem 1rem;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  background: ${(props) => props.theme.colors.background_card};
  color: ${(props) => props.theme.colors.text_card};

  transition: height 0.35s ease;

  h3 {
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    max-height: ${(props) => (props.isOpen ? "200px" : "0")};
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    transform: ${(props) =>
      props.isOpen ? "translateY(0)" : "translateY(-4px)"};

    overflow: hidden;

    transition: max-height 0.35s ease, opacity 0.25s ease, transform 0.25s ease;
  }

  span {
  }

  a {
    color: ${(props) => props.theme.colors.text_card};

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const ToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  font-size: 1rem;
  padding: 4px;
  color: ${(props) => props.theme.colors.text_card};

  transition: transform 0.25s ease;

  &:hover {
    opacity: 0.7;
  }
`;
