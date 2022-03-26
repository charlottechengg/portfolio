import React, { useEffect, useState } from "react";
import { Button, Typography, Card, Grid, Paper, CardActions,CardContent, IconButton} from '@mui/material';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';

const project1 = {
  "ProjectName": "FocusSpace",
  "Subtitle": "ElleHacks 2022 (Telus) First Place",
  "Description": "It is an innovative iOS app to help the community beat procrastination and focus with friends. It also encourages people to take some rest during their work, helping remote employees to disconnect from their work.",
  "Tech":["Swift 5", "SwiftUI", "CockroachDB", "Figma"],
  "GithubLink":"manyicheng/FocusSpace",
}
const project2 = {
  "ProjectName": "Friday",
  "Subtitle": "StormHacks2022 - Best Use of Google Cloud & Audience First Choice",
  "Description": "A web application to analyze sentiments and entities from user's text journal or audio journal, helping people with depression to identity their stressors. It also conveniently provides a standard depression screening for you to test.",
  "Tech":["React.js", "Express.js", "Firebase", "Google Cloud NL API", "Typescript", "AssemblyAI"],
  "GithubLink":"manyicheng/Friday",
}

const project3 = {
  "ProjectName": "P01nter",
  "Subtitle": "Google Vision, React.js, Express.js, Firebase, Three.js",
  "Description": "A space for users to post, share and enjoy their special moments of life with people around the world. It utilizes google vision API to detect labels, web entity and landscape from image and label the post based on confidence score.",
  "Tech":["React.js", "AssemblyAI"],
  "GithubLink":"manyicheng/P01nter",
}

const project4 = {
  "ProjectName": "HelpDoc!",
  "Subtitle": "React.js, Google Translation API, AssemblyAI",
  "Description": "A simple web app that records and transcribes the speech from a patient to a doctor, or vice versa. It is able to translate various languages.",
  "Tech":["React.js", "AssemblyAI"],
  "GithubLink":"manyicheng/help-doc",
}



const ProjectCard = ({projectInfo}) => {
    const handleGithub = (link) => {
      console.log(link)
      window.open('https://github.com/'+link, '_blank');
    }
    return(
      <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}  sx={{ bgcolor: "#262626" }}>
        <CardContent display="inline" align="left">
        <Typography variant="h4" gutterBottom>
          {projectInfo["ProjectName"]}
        </Typography>
        <Typography variant="h6" sx={{ mb: 1.5 }} >
          {projectInfo["Subtitle"]}
        </Typography>
        <Typography variant="h6">
          {projectInfo["Description"]}
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton >
            <GitHubIcon style={{ color: '#ffffff'}} onClick={() => handleGithub(projectInfo["GithubLink"])} />
          </IconButton>
        </CardActions>
      </Card>

    )
};


const Projects = () => {
    return (
            <Box
                id="projects" justifyContent="center" component="span" mt={10}
                sx={{ display: 'inline-block', mx: '2px', width:'60vw'}}
            >
                <Typography inline variant="h3" align="left" color="textPrimary" gutterBottom>Feature Projects</Typography>
                <Grid container sx={{ flexDirection: { xs: "column", md: "row"} }} alignItems="stretch" spacing={2}>
                    <Grid item xs={12} md={6} style={{display: 'flex'}}>
                        <ProjectCard projectInfo={project1}/>
                    </Grid>
                    <Grid item xs={12} md={6} style={{display: 'flex'}}>
                        <ProjectCard  projectInfo={project2}/>
                    </Grid>
                    <Grid item xs={12} md={6} style={{display: 'flex'}}>
                        <ProjectCard projectInfo={project3}/>
                    </Grid>
                    <Grid item xs={12} md={6} style={{display: 'flex'}}>
                        <ProjectCard projectInfo={project4}/>
                    </Grid>
                </Grid>
            </Box>
    );
};
export default Projects;


