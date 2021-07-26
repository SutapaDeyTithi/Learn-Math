import React from 'react';
import axios from "axios";
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

// import Container from "@material-ui/core/Container";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";

import SearchBar from "material-ui-search-bar";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import create_exam from "../../Resources/ImagesInstructor/create_exam.png";
import teacher from "../../Resources/ImagesInstructor/teacher_avatar.png";

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, 
    Button
  } from 'reactstrap';


// // / --- Fill Image Card Component Imports --- //
// import {
//   FiCard,
//   FiCardActionArea,
//   FiCardActions,
//   FiCardContent,
//   FiCardMedia
// } from "./UIToolsInstructor/FullImageCard";

import "./HomeInstructor.css";
import welcome from "../../Resources/Images/homepage1.jpg";
import img1 from "../../Resources/Images/img3.jpg";
import img2 from "../../Resources/Images/img2.png";
import img3 from "../../Resources/Images/img1.jpg";
import quiz from "../../Resources/Images/quiz.jpg";
import avatar1 from "../..\\Resources\\Images\\avatar1.jpg";
import avatar2 from "../../Resources/Images/avatar2.jpg";
import avatar3 from "../../Resources/Images/avatar3.jpg";
import avatar4 from "../../Resources/Images/avatar4.jpg";



// // import Button from "./button";
// import {
//     Dialog,
//     Button,
//     FormControl,
//     DialogActions,
//     DialogContent,
//     DialogTitle
//   } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      minWidth: 500,
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
        minWidth: 500,
      },
      image: {
        minWidth: 128,
        minHeight: 128,
      },
      img: {
        margin: 'auto',
        display: 'block',
        minWidth: '100%',
        minHeight: '100%',
      },
      Card2: {
        minWidth: 500,
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
    const [pow, setPow] = React.useState({contest_name: "Not Available"});
    const [top, setTop] = React.useState(null);
    const [showing, setShowing] = React.useState(false);
    const theme = useTheme();

    const OpenPOW = () => {
    // axios.get(`http://localhost:5000/infoProblemWeek`)
    //   .then(res => {
    //       setPow(res.data);
    //       setShowing(true);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    // });
    }

    const loadTopContributors = () => {
        axios.get(`http://localhost:5000/contributionIn`)
        .then(res => {
            // console.log("loading top contributors")
            setTop(res.data);
            setShowing(true);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const HideTopContributors = () => {
        setShowing(false);
    }

    return (
        <>
            <main>
                <section id="home2">
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

                    {
                        !showing &&
                        <Button color='primary' style={{minWidth: '12em'}} 
                        onClick={loadTopContributors}
                        >Show Top Contributors</Button>
                    }
                    
                    {
                        showing &&
                        <Button color='primary' style={{minWidth: '12em'}} 
                        onClick={HideTopContributors}
                        >Hide Top Contributors</Button>
                    }

                    {   
                    showing &&
                        <div>
                             <Typography variant="h5" gutterBottom align="left" style={{marginTop: '2em'}}>
                                Top Contributors 
                            </Typography> 
                        </div>
                            
                    }

                    <br></br><br></br>

                    {
                    !showing &&
                        <img src={create_exam} alt="Instructor" style={{maxWidth: '70vh', maxHeight: '70vh'}}/>
                            
                    }

                    <GridList className={classes.gridList} cols={2.5}>


                    {
                    showing &&
                            <GridListTile >
                            <img src={'http://localhost:5000/' + top[0].image} alt="Instructor" />
                            <GridListTileBar
                            title={top[0].user_name}
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
                    }
                    {showing &&
                        
                            
                        <GridListTile >
                            <img src={'http://localhost:5000/' + top[1].image} alt="Instructor" />
                            <GridListTileBar
                            title={top[1].user_name}
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
                    }
                    {showing &&
                        <GridListTile >
                            <img src={'http://localhost:5000/' + top[2].image} alt="Instructor" />
                            <GridListTileBar
                            title={top[2].user_name}
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
                    }
                    {showing &&
                        <GridListTile >
                            <img src={'http://localhost:5000/' + top[3].image} alt="Instructor" />
                            <GridListTileBar
                            title={top[3].user_name}
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
                    }

                    
                       
                        




                    </GridList>
                        </Grid>

                        

                        <Grid spacing={6}/>

                        <Grid item xs={2} >
                        <Button color='primary' style={{minWidth: '10em'}} 
                                onClick={OpenPOW}
                                >View Profile</Button>

                            <SearchBar
                                onChange={() => console.log('onChange')}
                                onRequestSearch={() => console.log('onRequestSearch')}
                                style={{
                                    margin: '0 auto',
                                    marginTop: '3em',
                                    maxWidth: 800
                                }}
                                />
                            <br/> <br/>
                            <Box>
                         
                           

                            <Card style={{minWidth: '15em'}}>
                                <CardImg top width="100%" src={quiz} alt="Card image cap" />
                                <CardBody>
                                <CardTitle tag="h5">Upcoming Problem Of the Week</CardTitle>

                            
                                <Button color='primary' style={{minWidth: '10em'}} 
                                onClick={OpenPOW}
                                >See More</Button>
                                </CardBody>
                            </Card>




                        </Box>
                             {/* </CardContent> */}
                            {/* </Card> */}
                        </Grid>
                        </Grid>
                        </div>

                            {/* <div className='row2nd'>
                    
                                <Typography variant="h4" gutterBottom>
                                    See What We're About
                                </Typography>
                          
                            </div>  */}

                
            </div>
            </section>
            </main>
        </>
    );
}


// full image card: https://codesandbox.io/s/material-ui-full-image-card-qb862?file=/src/index.js:1508-1536