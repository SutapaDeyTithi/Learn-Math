import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";

import SearchBar from "material-ui-search-bar";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


// // / --- Fill Image Card Component Imports --- //
// import {
//   FiCard,
//   FiCardActionArea,
//   FiCardActions,
//   FiCardContent,
//   FiCardMedia
// } from "./UIToolsInstructor/FullImageCard";

import "./HomeInstructor.css";
import welcome from "../../Resources/ImagesInstructor/homepage1.jpg";
import img1 from "../../Resources/ImagesInstructor/img3.jpg";
import img2 from "../../Resources/ImagesInstructor/img2.png";
import img3 from "../../Resources/ImagesInstructor/img1.jpg";
import quiz from "../../Resources/ImagesInstructor/quiz.jpg";
import avatar1 from "../..\\Resources\\ImagesInstructor\\avatar1.jpg";
import avatar2 from "../../Resources/ImagesInstructor/avatar2.jpg";
import avatar3 from "../../Resources/ImagesInstructor/avatar3.jpg";
import avatar4 from "../../Resources/ImagesInstructor/avatar4.jpg";



// import Button from "./button";
import {
    Dialog,
    Button,
    FormControl,
    DialogActions,
    DialogContent,
    DialogTitle
  } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 500,
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      },
    paper: {
        paddingTop: '-10vh',
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
      },
      image: {
        width: 128,
        height: 128,
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
      Card: {
        maxWidth: 500,
        minHeight: 1000,
      },
    
      /**
       * Applied to Orginal Card demo
       * Same vale used in Material-ui Card Demos
       */
      media: {
        height: 140
      },
    
      /**
       * Demo stlying to inclrease text visibility
       * May verry on implementation
       */
      fiCardContent: {
        color: "#ffffff",
        backgroundColor: "rgba(0,0,0,.24)"
      },
      fiCardContentTextSecondary: {
        color: "rgba(255,255,255,0.78)"
      }
  }));

export default () => {
    const classes = useStyles();
    // const theme = useTheme();
    return (
        <>
            <main>
                <section id="home">
                    <div className="container-fluid">
                    <div className="firstPage">
                    <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    >
                    <Grid item xs={9}>
                    <Typography variant="h5" gutterBottom align="left">
                        Top Contributors 
                    </Typography> 

                    <GridList className={classes.gridList} cols={2.5}>
                       
                        <GridListTile >
                            <img src={avatar1} alt="Instructor" />
                            <GridListTileBar
                            title="Instructor"
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`star 3`}>
                                <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                            />
                        </GridListTile>
                        <GridListTile >
                            <img src={avatar2} alt="Instructor" />
                            <GridListTileBar
                            title="Instructor"
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`star 4}`}>
                                <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                            />
                        </GridListTile>
                        <GridListTile >
                            <img src={avatar3} alt="Instructor" />
                            <GridListTileBar
                            title="Instructor"
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`star 1`}>
                                <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                            />
                        </GridListTile>
                        <GridListTile >
                            <img src={avatar4} alt="Instructor" />
                            <GridListTileBar
                            title="Instructor"
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`star 1`}>
                                <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                            />
                        </GridListTile>

                    </GridList>
                        </Grid>

                        

                        <Grid spacing={6}/>

                        <Grid item xs={2} >
                            {/* <Card className={classes.card}> */}
                            {/* <CardContent>  */}
                            <SearchBar
                                onChange={() => console.log('onChange')}
                                onRequestSearch={() => console.log('onRequestSearch')}
                                style={{
                                    margin: '0 auto',
                                    maxWidth: 800
                                }}
                                />
                            <br/> <br/>
                            <Box>
                            {/* <Typography variant="h6" paragraph align="center">
                            Original
                            </Typography> */}
                            <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={quiz}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                Upcoming Problem of the Week
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                All About Circle
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            
                            </CardActions>
                            </Card>
                        </Box>
                             {/* </CardContent> */}
                            {/* </Card> */}
                        </Grid>
                        </Grid>
                        </div>

                            <div className='row2nd'>
                            {/* <Card className={classes.card}> */}
                            {/* <CardContent> */}
                                <Typography variant="h4" gutterBottom>
                                    See What We're About
                                </Typography>
                            {/* </CardContent> */}
                            {/* </Card> */}

                            
                            {/* <Button variant="outlined" color="primary">
                                Get Started
                            </Button> */}
                        </div> 

                <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                >
                    <Grid item xs={4} >
                    {/* <Container className={classes.container}> */}
                        <Box my={4}>
                            {/* <Typography variant="h6" paragraph align="center">
                            Original
                            </Typography> */}
                            <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={img1}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Personalised Learning
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Students practice at their own pace, first filling in gaps in their understanding 
                                and then accelerating their learning.
                                </Typography>
                                <br/>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                {/* <Button size="small" color="primary">
                                Share
                                </Button> */}
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={4} >
                    {/* <Container className={classes.container}> */}
                        <Box my={4}>
                            {/* <Typography variant="h6" paragraph align="center">
                            Original
                            </Typography> */}
                            <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={img2}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Quality Content
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Created by experts, Khan Academy’s library of trusted practice 
                                and lessons covers math, science, and more. 
                                Always free for learners and teachers.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                {/* <Button size="small" color="primary">
                                Share
                                </Button> */}
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                            </Card>
                        </Box>
                    </Grid>

                    <Grid item xs={4} >
                    {/* <Container className={classes.container}> */}
                        <Box my={4}>
                            {/* <Typography variant="h6" paragraph align="center">
                            Original
                            </Typography> */}
                            <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={img3}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Tools to empower teachers
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                With Khan Academy, teachers can identify gaps in their students’ understanding, tailor instruction, 
                                and meet the needs of every student.
                                </Typography>
                                <br/>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                {/* <Button size="small" color="primary">
                                Share
                                </Button> */}
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                            </Card>
                        </Box>
                    </Grid>

                {/* </Container> */}
            </Grid>
            </div>
            </section>
            </main>
        </>
    );
}


// full image card: https://codesandbox.io/s/material-ui-full-image-card-qb862?file=/src/index.js:1508-1536