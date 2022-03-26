import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from "@mui/material/CssBaseline";
import Intro from '../components/Intro';
import Appbar from '../components/Appbar';
import React from "react";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { Icon } from "@mui/material";
import Contacts from "../components/Contacts";


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
            },
            h2: {
              fontWeight: 'bold',
            },
            h3: {
              fontWeight: 'bold',
            },
        },
        buttonIcon: {
          color: "#ffffff",
      },
    });

    themeDark = responsiveFontSizes(themeDark);
    themeLight = responsiveFontSizes(themeLight);


    const [light, setLight] = React.useState(false);
    // this.anyRef = React.createRef();
    // this.anyRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // const scrollTo = (ref) => {
    //   if (ref && ref.current /* + other conditions */) {
    //     ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    //   }
    // }

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
    <CssBaseline />
    <div className="App">
      <Appbar setTheme={() => setLight(!light)}/>
      <Intro className="Intro"/>
      <Skills/>
      <Projects/>
      <Contacts/>
      {/* <div ref={scrollTo}>Item</div> */}
    </div>
    </ThemeProvider>
  );
}

export default Home;
