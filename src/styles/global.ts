import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        color: ${props => props.theme.colors.text_background};
        background: ${props => props.theme.colors.background};

        height: 100vh;
        width: 100%;

        main{
            font-family:'Roboto Flex', 'sans-serif';
            h1,h2{
                font-weight: 600;
            }
            h3{
                font-weight: 500;
            }
            span{
                font-weight: 300;
            }
            a{
                font-weight: 500;
            }
        }
    }

    body::-webkit-scrollbar {
        width: 12px;               /* width of the entire scrollbar */
    }

    body::-webkit-scrollbar-track {
        background: #d3d3d3;     /* color of the tracking area */
    }

    body::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.primary}; /* color of the scroll thumb */
        border-radius: 10px;       /* roundness of the scroll thumb */
        border: 2px solid #d3d3d3;  
    }

    html{
        @media(max-width:880px){
            font-size: 95%;
        }
        @media(max-width:820px){
            font-size: 90%;
        }
        @media(max-width:720px){
            font-size: 85%;
        }
        @media(max-width:420px){
            font-size: 75%;
        }
        @media(max-width:340px){
            font-size: 65%;
        }
        @media(max-width:300px){
            font-size: 60%;
        }
        @media(max-width:270px){
            font-size: 55%;
        }

        overflow-x: hidden;
    }
`
