import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --background: #2F2E41;
        --background-light: #3F3D56;
        --white: #fff;
        --blue: #009EDD;
        --grey: #999999;
        --light-grey: #D9D9D9;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background);
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }
`;

export default GlobalStyles;
