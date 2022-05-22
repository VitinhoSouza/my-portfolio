import styled from 'styled-components';

export const Container = styled.main`
    background: black;

    height: 10rem;
    width: 20rem;

    margin: 0.5rem 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    background: ${props => props.theme.colors.background_card};
    color: ${props => props.theme.colors.text_card};

    a{
        color:${props => props.theme.colors.text_card};

        &:hover{
            background: rgba(0,0,0,0.1);
        }
    }
`