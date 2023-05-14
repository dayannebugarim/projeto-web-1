import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        letter-spacing: 0.03rem;
    }

    ::-webkit-scrollbar{
        width: 10px;
        background-color: #384348;
        border-radius: 6px;
        border-bottom-right-radius: 5px;
    } 

    ::-webkit-scrollbar-thumb{
        background-color: #818E95;
        border-radius: 6px;
        border: 2px solid #384348;
    }

    body {
        margin: auto;
        max-width: 1200px;
        font-family: 'Roboto', sans-serif;
        color: #fff;
        background-color: #17232C;
    }

    #root {
        text-align: center;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 1rem 0;
    }

    h1 {
        height: fit-content;
    }

    .body-container {
        display: flex;
        gap: 2rem;
    }
`;
