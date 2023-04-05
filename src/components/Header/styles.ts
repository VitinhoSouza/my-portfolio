import styled from 'styled-components';

import IconArrow from "../../assets/arrow-bottom.svg";

const iconArrowBottom = `url(${IconArrow})`;

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
        /* margin-right: 0.5rem; */

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

export const ThemeContainer = styled.div`
    text-transform: none;
    font-size: 0.8rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`

export const SwitchContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`
export const LanguageContainer = styled.div`
    text-transform: none;
    font-size: 0.8rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
`

export const SelectLanguage = styled.select`
    width: 100%;
    background-color: rgb(245, 247, 250);
    background-image: ${iconArrowBottom};
    background-repeat: no-repeat;
    background-size: 10px;
    background-position-x: 95%;
    background-position-y: center;
    color: rgb(51, 57, 71);
    font-family: Oswald;
    border-radius: 8px;
    padding: 8px 16px 8px 8px;
    line-height: 24px;
    appearance: none;
    
    &:hover: {
      cursor: "pointer",
    }
`


