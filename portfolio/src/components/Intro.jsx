import React, { useEffect, useState } from "react";
import { Button, Typography, CssBaseline} from '@mui/material';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Add as AddIcon } from '@mui/icons-material';

const Intro = () => {

    const themeLight = createTheme({
        palette: {
          background: {
            default: "#e4f0e2"
          }
        }
      });

    const themeDark = createTheme({
        palette: {
          background: {
            default: "#222222"
          },
          text: {
            primary: "#ffffff"
          }
        }
      });

    themeDark.typography.h3 = {
        color:"textPrimary",
        fontSize: '1.1rem',
        '@media (min-width:600px)': {
            fontSize: '1.2rem',
        },
        [themeDark.breakpoints.up('md')]: {
            fontSize: '2.2rem',
        },
    };
    themeDark.typography.h1 = {
        fontSize: '2.5rem',
        '@media (min-width:600px)': {
            fontSize: '2.5rem',
        },
        [themeDark.breakpoints.up('md')]: {
            fontSize: '6.8rem',
        },
    };


    return (
        <ThemeProvider theme={themeDark}>
            <CssBaseline />
            <Box
                justifyContent="center" component="span"
                sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', width:'60vw'}}
            >
                <Typography inline variant="h3" align="left" color="textPrimary" >👋 Hello! I am</Typography>
                <Typography inline variant="h1" align="left" gutterBottom='true' color="textPrimary">Charlotte Cheng,</Typography>
                <Typography inline variant="h3" align="left"  gutterBottom='true' color="textPrimary">and I am a third year Software Engineering student at McMaster University.</Typography>
                <Typography inline variant="h3" align="left" color="textPrimary">I am currently working as a Junior Backend Developer / Devops Engineer at IBM. I've also volunteered at Illetonna as a NLP Program Manager in the past.</Typography>
            </Box>
        </ThemeProvider>
    );
};
export default Intro;
