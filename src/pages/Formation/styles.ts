import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    padding: 2rem 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InfoEducation= styled.div`
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

export const InfoExperienceContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem 2rem 0;
`

export const InfoExperience = styled.div`
    width: 100%;
    padding: 2rem 2rem 0;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
`