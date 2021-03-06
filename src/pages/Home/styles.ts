import styled from 'styled-components';

export const Container = styled.main`
    height: 65vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width:550px){
        flex-direction: column;
        height: 70vh;
        .image{
            width: 100%;
            height: 45%;
            img{
                width: 8rem;
            }
        }

        .description{
            width: 100%;
            height: 55%;
            p{
                font-size: 1.3rem;
            }
        }
    }
`

export const ContainerImage = styled.div`
    width: 30%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 11.5rem;
    }
    
`

export const ContainerDescription = styled.div`
    width: 70%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    h1{
        font-size: 2.5rem;
    }

    p{
        font-size: 1.5rem;
        width: 90%;
    }
`

