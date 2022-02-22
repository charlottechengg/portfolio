import React, { useEffect, useState } from "react";
import { Button, Typography, CssBaseline} from '@mui/material';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Add as AddIcon } from '@mui/icons-material';

const Intro = () => {

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
