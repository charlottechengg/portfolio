import React, { useEffect, useState } from "react";
import { Button, Typography, Card, Grid, Paper, CardActions,CardContent, IconButton, List, ListItem} from '@mui/material';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
const contacts = [
    {"link": "https://github.com/manyicheng", "icon": GitHubIcon},
    {"link": "https://www.linkedin.com/in/manyicheng", "icon":LinkedInIcon},
    {"link": "mailto:charlottecheng456@gmail.com", "icon":EmailIcon},
]
const Contacts = () => {
    const [iconColor,setIconColor] = useState("#ffffff");
    const handleLink = (link) => {
        console.log(link)
        window.open(link, '_blank');
    }
    return (
        <Box justifyContent="center" component="span" mt={5}
        sx={{ display: 'inline-block', mx: '2px', width:'60vw'}}>
            <Grid id="contacts" container spacing={2} mt={5} mb={2} columns={16} >
                <Grid item xs={8}>
                    <Box justifyContent="flex-start" component="span"
                        sx={{ display: 'flex', flexGrow: 2 }}>
                        <Typography variant="h6" gutterBottom >Created by Charlotte with ❤️ </Typography>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box justifyContent="flex-end" component="span"
                        sx={{ display: 'flex', flexGrow: 2 }}>
                        <List sx={{ display: 'flex', flexDirection: 'row', padding: 0}}>
                            {contacts.map((contact) => (
                                <ListItem key={contact.link} disablePadding>
                                    <IconButton onClick={() => handleLink(contact.link)} >
                                        <contact.icon fontSize="large" style={{ color: '#ffffff'}} />
                                    </IconButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Grid>

            </Grid>

        </Box>
    );
};
export default Contacts;
