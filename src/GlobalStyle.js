import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body{
  color: ${({ theme: { colors } }) => colors.primaryColor};
  background-color: #d3d3d3;
     background-image: 
     linear-gradient(
      rgba(46, 47, 66, 0.8),
      rgba(46, 47, 66, 0.8)
    ),
     url(https://th.bing.com/th/id/OIP.7_s6lM7rBIgg_5pGelLCsQHaK5?rs=1&pid=ImgDetMain);
  padding: 50px;
  background-repeat:repeat;
  background-size:cover;
  @media only  screen and (max-width:427px) {
    font-size: 11px;
  }
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  color: inherit;
  text-decoration: none;
}`;
