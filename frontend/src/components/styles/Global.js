import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
    * {
        box-sizing: border-box;
    }
    html, body, #app, #app>div {
        height: auto;
    }

    #root {
        position: relative;
        min-height: 100vh;
        padding-bottom: 120px;
        @media screen and (max-width: 768px) {
            padding-bottom: 200px;
        }
    }
    
    ::-webkit-scrollbar {
        width: 8px;
        background-color: transparent;
    }
        
    ::-webkit-scrollbar-thumb {
        background: #555; 
        border-radius: 8px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #111; 
    }

    body {
        min-height: 100vh;
        overflow: overlay;
        background: ${({ theme }) => theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-family: Arial, sans-serif;
        font-size: 1.15em;
        margin: 0;
        /*background-image: 
        -webkit-repeating-linear-gradient(left, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0)   .6%, hsla(0,0%,100%, .1) .75%),
        -webkit-repeating-linear-gradient(left, hsla(0,0%,  0%,0) 0%, hsla(0,0%,  0%,0)   .4%, hsla(0,0%,  0%,.03) .45%),
        -webkit-repeating-linear-gradient(left, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) .12%, hsla(0,0%,100%,.15) .22%),
        
        //radial-gradient(ellipse farthest-corner at left top, #D3D3D3 0%, #BEBEBE 8%, #7B7B7B 30%, #6F6F6F 40%, transparent 80%),
        //radial-gradient(ellipse farthest-corner at right bottom, #D1B464 1% , #ffb 5%, #d0d090 8%, #D1B464 25%, #5d4a1f 72.5%, #5d4a1f 100%);
        linear-gradient(153deg, #6F6F6F 10%, #ccc 16%, #7B7B7B 30%, #6F6F6F 40%, transparent 60%),
        radial-gradient(ellipse farthest-corner at bottom right, #ff8050 0%, transparent 20%),
        linear-gradient(343deg, #D1B464 10%, #FFFFAC 16%, #D1B464 45%, #5d4a1f 62.5%, #5d4a1f 100%);
        *///repeating-linear-gradient(180deg, 
        //hsl(0,0%,55%)  0%, 
        //hsl(0,0%,85%) 38%, 
        //hsl(0,0%,68%) 42%,
        //hsl(0,0%,50%) 100%
        //);
        display: flex;
        
        flex-direction:column;
    }
    p {
        opacity: 0.6;
        line-height: 1.5;
    }
    img {
        max-width: 100%;
    }
`

export default GlobalStyles;