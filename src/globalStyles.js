import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: #EBECF0; 
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    letter-spacing: -0.2px;
  }
  h1, h2, h3, h4, h5, h6, p {
    color: #9498a3;
    text-shadow: 1px 1px 1px #FFF;
    padding: 0;
    margin: 8px;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

  a {
    text-decoration: none;
    color: currentColor;
    cursor: $cursor-dark;
  }

  textarea {
    resize: none;
  }
  `;

export default GlobalStyle;
