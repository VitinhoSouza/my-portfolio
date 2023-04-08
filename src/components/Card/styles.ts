import styled from 'styled-components';

type CardContainerProps = {
    width: string;
    height: string;
}

export const Container = styled.main<CardContainerProps>`
    background: black;

    height: ${props => props.height ? props.height : '11rem'};
    width: ${props => props.width ? props.width : '20rem'};

    padding: 0.5rem 1rem;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    background: ${props => props.theme.colors.background_card};
    color: ${props => props.theme.colors.text_card};

    h3{
        font-weight: 700;
    }

    span{
    }

    a{
        color:${props => props.theme.colors.text_card};

        &:hover{
            background: rgba(0,0,0,0.1);
        }
    }
`