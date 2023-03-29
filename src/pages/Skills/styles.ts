import styled from 'styled-components';

export const Container = styled.main`
    min-height: 65vh;
    width: 100%;
    padding: 2rem 0;

    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width:550px){
        flex-direction: column;
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

    h2{
        margin-bottom: 1rem;
    }

    ul{
        width: 80%;
        li{
            font-size: 1.2rem;
        }
    }

    @media(max-width:550px){
        &:last-child{
            margin-top: 2rem;
        }
    }
    
`