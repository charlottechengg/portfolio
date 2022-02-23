import React, { useEffect, useState } from "react";
import { Button, Typography, List, ListItem, Grid, Paper} from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const skillList1 = ["JavaScript", "Python", "Bash", "Java", "Go"]
const skillList2 = ["Swift", "React.js", "Express.js", "Matlab", "SQL"]
const skillList3 = ["Git", "AWS", "Docker", "Jenkins", "Openshift"]

const SkillSection = ({skills}) => {
    return(
    <List>
    {skills.map((value) => (
        <ListItem
        key={value}
        disablePadding>
            <li >
                <Typography variant="h5">{value}</Typography>
            </li>
        </ListItem>
    ))}
    </List>
    )
};


const Skills = () => {

    return (
            <Box
                justifyContent="center" component="span" mt={5}
                sx={{ display: 'inline-block', mx: '2px', width:'55vw'}}
            >
                <Typography inline variant="h3" align="left" color="textPrimary" gutterBottom>My Backpack</Typography>
                <Grid container direction="row" alignItems="flex-start" spacing={2}>
                    <Grid item xs={4}>
                        <SkillSection skills={skillList1}/>
                    </Grid>
                    <Grid item xs={4}>
                        <SkillSection skills={skillList2}/>
                    </Grid>
                    <Grid item xs={4}>
                        <SkillSection skills={skillList3}/>
                    </Grid>
                </Grid>
            </Box>
    );
};
export default Skills;


