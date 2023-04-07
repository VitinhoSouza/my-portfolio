import styled from 'styled-components';

export const Container = styled.main`
    height: 69.9vh;
    width: 100%;
    padding: 2rem 0;

    display: flex;
    justify-content: space-around;
    align-items: center;

    @media(max-width:550px){
        flex-direction: column;
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
            > p{
                font-size: 1.3rem;
            }
        }
    }
`

export const ContainerImage = styled.div`
    width: 35%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 14.5rem;
        border-radius: 9999px;
        object-fit: cover;
    }
    
`

export const ContainerDescription = styled.div`
    width: 65%;
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
        margin-top: 2rem;
    }
`

