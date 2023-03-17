import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    a {
        text-decoration: none;
        color: inherit;
    }
    html, body, #root {
        height: 100%;
    }
    html,
    body,
    body > div { /* the react root */
        margin: 0;
        padding: 0;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif;
    }
    h2 {
        margin: 0;
        font-size: 16px;
    }
    ul {
        margin: 0;
        padding: 0 0 0 1.5em;
    }
    li {
        padding: 0;
    }
    b { 
        margin-right: 3px;
    }
`;

export default GlobalStyle;
