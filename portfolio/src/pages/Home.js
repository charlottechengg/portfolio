import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Intro from '../components/Intro';
import Appbar from '../components/Appbar';
import React from "react";

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
                fontSize: '2.9rem',
                '@media (min-width:600px)': {
                    fontSize: '2.9rem',
                },
                [themeDark.breakpoints.up('md')]: {
                    fontSize: '6.8rem',
                },
            },
            h3:{
                fontSize: '1.1rem',
                '@media (min-width:600px)': {
                    fontSize: '1.2rem',
                },
                [themeDark.breakpoints.up('md')]: {
                    fontSize: '2.2rem',
                },
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
          }
        },
        typography: {
            h1: {
                fontSize: '2.9rem',
                '@media (min-width:600px)': {
                    fontSize: '2.9rem',
                },
                [themeDark.breakpoints.up('md')]: {
                    fontSize: '6.8rem',
                },
            },
            h3:{
                fontSize: '1.1rem',
                '@media (min-width:600px)': {
                    fontSize: '1.2rem',
                },
                [themeDark.breakpoints.up('md')]: {
                    fontSize: '2.2rem',
                },
            },
        },
      });


    const [light, setLight] = React.useState(false);

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
    <CssBaseline />
    <div className="App">
      <Appbar setTheme={() => setLight(!light)}/>
      <Intro/>

    </div>
    </ThemeProvider>
  );
}

export default Home;
