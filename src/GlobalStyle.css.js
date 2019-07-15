import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap');
body{
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    height: 100vh;
    margin: 0;
    color: #2b2c2d;
    background-color: #edeef0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

#root {
    padding: 32px;
}
`;
