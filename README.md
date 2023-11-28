# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  font-family: 'Dai Banna SIL', serif;
  font-family: 'Gelasio', serif;
  font-family: 'Suranna', serif;
  font-family: 'Xanh Mono', monospace;
  @media screen and (max-width: 320px) {
  }
  @media (min-width: 321px) and (max-width: 399px) {
  }
  @media (min-width: 400px) and (max-width: 499px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 700px) {
  }
  @media screen and (min-width: 800px) {
  }
  @media screen and (min-width: 900px) {
  }
  @media screen and (min-width: 1000px) {
  }
  @media screen and (min-width: 1100px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1300px) {
  }
  @media screen and (min-width: 1400px) {
  }
  //////
  .services-list {
  padding: 2rem;

  .services-heading {
  h4 {
  font-family: $font-h4;
  font-style: italic;
  color: $bright-color;
  font-weight: 500;

          font-size: 18px;
        }
        h2 {
          font-family: $font-h4;
          color: $secondary-color;
          font-weight: 500;
          font-size: 25px;
        }

  }

  .service-item {
  transition: height 0.3s ease;
  overflow: hidden;
  img {
  max-width: 100%;
  width: 500px;
  height: 230px;
  }
  .service-header {
  h4 {
  font-family: $font-h4;
  font-style: italic;
  color: $bright-color;
  font-weight: 500;
  padding: 0;
  margin-top: 1rem;
  margin-left: 0rem;
  margin-right: 0rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  svg {
  transition: transform 0.3s ease;
  }
  }
  }
  .service-content {
  max-height: 0;
  opacity: 0;
  transition:
  max-height 0.5s ease,
  opacity 0.5s ease;
  &.open {
  max-height: 500px;
  opacity: 1;
  }
  article {
  color: $secondary-color;
  font-size: 15px;
  font-family: $font-article;
  line-height: 1.5;
  text-align: justify;
  font-weight: normal;
  padding-bottom: 1rem;
  transition: transform 1.3s ease;
  }
  }
  }
  }
  <!--  -->
