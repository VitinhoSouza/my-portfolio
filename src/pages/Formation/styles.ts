import styled from 'styled-components';

export const Container = styled.main`
    height: 65vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(max-width:700px){
        height: 75vh;
    }
`

export const InfoEducationOrExperience = styled.div`
    height: 50%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h2{
        text-align: center;
    }

    ul{
        max-width: 80%;
        li{
            font-size: 1.2rem;
        }
    }
`