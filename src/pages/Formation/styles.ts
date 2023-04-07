import styled from 'styled-components';

export const Container = styled.main`
    min-height: 69.9vh;
    width: 100%;
    padding: 2rem 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
        margin-bottom: 1rem;
    }

    ul{
        max-width: 80%;
        li{
            font-size: 1.2rem;
        }
    }

    &:last-child{
        margin-top: 2rem;
    }
`