import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        letter-spacing: 0.03rem;
    }

    body {
        margin: auto;
        max-width: 1200px;
        font-family: 'Roboto', sans-serif;
        color: #2C2C2C;
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
