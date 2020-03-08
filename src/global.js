import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
    padding-left: 10%;
    padding-right: 10%;
  }
  .emoji {
    font-size: 3rem;
    text-align: center;
    text-transform: uppercase;
    padding-left: 25%;
    padding-right: 25%;
  }
  .bold{
    font-size: 1.5rem;
    font-weight: bold;
  }
  .foot{
    height: 5%;
    position: fixed;
    left: -2%;
    bottom: 2%;
    width: 100%;
    text-align: right;
  }
  .about {
   font-size: 1.5rem;
    text-align: center;
    padding-left: 10%;
    padding-right: 10%;
  }
  .projects {
   font-size: 1.2rem;
    text-align: center;
    padding-left: 10%;
    padding-right: 10%;
  }
  .fade-appear {
    opacity: 0;
    z-index: 1;
  }
  .fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity 1500ms linear
  }
  .fade-enter {
     opacity: 0;
    z-index: 1;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms linear
  }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }
  div {
    text-align: center;
  }
  small {
    display: block;
  }
  .links {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
`;
