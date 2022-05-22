import styled from 'styled-components';

export const Container = styled.main`
    height: 65vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width:550px){
        flex-direction: column;
        height: 85vh;
        div{
            width: 100%;
            padding-top: 1rem;
        }
    }
`

export const InfoSkills = styled.div`
    height: 100%;
    width: 50%;

    /* background: lime; */

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    ul{
        width: 80%;
        li{
            font-size: 1.2rem;
        }
    }
`