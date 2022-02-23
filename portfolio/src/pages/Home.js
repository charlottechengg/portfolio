import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Intro from '../components/Intro';
import Appbar from '../components/Appbar';
import React from "react";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { Icon } from "@mui/material";

function Home() {
    let themeDark = createTheme()
    let themeLight = createTheme()
    themeLight = createTheme({
        palette: {
          background: {
            default: "#ffffff"
          }
        },
        typography: {
          h1: {
            fontWeight: 'bold',
            fontSize: '6.6rem',
          },
          h2: {
            fontWeight: 'bold',
            fontSize: '3.3rem',
          },
          h3: {
            fontWeight: 'bold',
            fontSize: '2.5rem',
          },
        },
      });

    themeDark = createTheme({
        palette: {
          background: {
            default: "#222222"
          },
          text: {
            primary: "#ffffff"
          },
        },
        typography: {
            h1: {
              fontWeight: 'bold',
              fontSize: '6.6rem',
            },
            h2: {
              fontWeight: 'bold',
              fontSize: '3.3rem',
            },
            h3: {
              fontWeight: 'bold',
              fontSize: '2.5rem',
            },
        },
        buttonIcon: {
          color: "#ffffff",
      },
    });

    themeDark = responsiveFontSizes(themeDark);
    themeLight = responsiveFontSizes(themeLight);


    const [light, setLight] = React.useState(false);

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
    <CssBaseline />
    <div className="App">
      <Appbar setTheme={() => setLight(!light)}/>
      <Intro/>
      <Skills/>
      <Projects/>

    </div>
    </ThemeProvider>
  );
}

export default Home;
