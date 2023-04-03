import styled from 'styled-components';

export const Container = styled.header`
    width: 100vw;
    height: 20vh;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text_primary};
    font-family:Oswald;
    text-transform: uppercase;
    font-weight: 600;

    position: relative;

    .toggleTheme{
        margin-right: 0.5rem;

        .react-switch-bg{
            width: 3.5rem !important;
            height: 1.8rem !important;
        }

        .react-switch-handle{
            width: 1.4rem !important;
            height: 1.4rem !important;
        }
    }

    .active{
        .react-switch-handle{
            transform: translateX(1.8rem) !important;
        }
    }

    @media(max-width:550px){
        flex-direction: column;
        height: 25vh;

        .toggleTheme{
            position: absolute !important;
            right: 1rem;
            top: 2.5rem;
        }
    }
`

export const PersonalData = styled.div`
    width: 18rem;
    /* height: 55%; */

    .title{
        font-size: 2.5rem;
    }

    font-size: 1.4rem;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    text-align: center;

`

export const Menu = styled.nav`
    height: 40%;
    width: 30rem;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    font-size: 1.4rem;

    a{
        text-decoration: none;
        color: ${props => props.theme.colors.text_primary};

        :hover{
            transition: 0.2s filter linear;
            filter: brightness(0.75);
            /* margin-bottom: 0.5rem; */
            border-bottom: 0.1rem solid ${props => props.theme.colors.text_primary};
        }
    }

    a.active{
        border-bottom: 0.2rem solid ${props => props.theme.colors.text_primary};
        :hover{
            filter:none;
            margin-bottom: 0;
            cursor: default !important;
        }
    }
`



