import styled from 'styled-components';

export const Container = styled.footer`
    width: 100vw;
    padding: 1rem 0;
    height: 10%;

    font-family: Oswald;
    font-weight: 400;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text_primary};

    @media(max-width:600px){
        flex-direction: column;
        height: 15%;
    }
`

export const Copyright = styled.span`
    height: 50%;
    width: 25rem;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media(max-width:400px){
        width: 15rem;
    }
`

export const SocialNetworks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 15rem;
    height: 50%;

    a{
        text-decoration: none;
        color: ${props => props.theme.colors.text_primary};

        :hover{
            transition: 0.2s filter linear;
            filter: brightness(0.75);
            padding-bottom: 0.5rem;
        }
    }
`