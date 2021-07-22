import React, { Component } from "react";
import Textfield from "../UIToolsInstructor/textField";
import Checkbox from "../UIToolsInstructor/checkBox";
import Htmleditor from "../UIToolsInstructor/htmlEditor";
// import Dropdown from "../UIToolsInstructor/dropdwon";
// import Button from "../UIToolsInstructor/button";
import Videoup from "../UIToolsInstructor/videoUp";
import Imageup from "../UIToolsInstructor/imageUploadGeeks";
import Button from 'react-bootstrap/Button';
import Box from '@material-ui/core/Box';
import "./CreateTutorials.css";
import axios from "axios";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


// import from materials-ui
const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '100%', height: '50vh', borderColor: '#D3D3D3' },
  };


class CreateTutorial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            create_new_tutorial: false,
            topic: "Topic",
            subtopic: "Subtopic",
            title: "Title",
            short_desc: "Short Description",
            tutorial_type: "Tutorial Type",
            tutorial_text: {
                "html_text": ""
            },
            tutorial_video: null,
            tutorial_figure: null,

            topic_array: [],
            subtopic_array: [],
        }
        // this.createNewTutorial = this.createNewTutorial.bind(this);
        // this.saveTutorial = this.saveTutorial.bind(this);

        this.handleTopic = this.handleTopic.bind(this);
        this.handleSubtopic = this.handleSubtopic.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleShortDesc = this.handleShortDesc.bind(this);
        // this.handleType = this.handleType.bind(this);

        this.handleTutorial = this.handleTutorial.bind(this);
        this.handleTutorial_figure = this.handleTutorial_figure.bind(this);
        this.handleTutorial_video = this.handleTutorial_video.bind(this);
    }

    componentDidMount() {

        fetch("http://localhost:5000/topic")
            .then(res => res.json())
            .then(json => this.setState({ topic_array: json }));
        console.log("topic array --> ", this.state.topic_array);
    }

    handleTopic = (e) => {
        this.setState({topic: e});
        this.state.topic = e;
        console.log("topic --> ", this.state.topic);
        const topicName = this.state.topic;

        if(topicName != 'Topic' && topicName != "") {
            axios.get(`http://localhost:5000/subtopics_instructor`,  { params: { topic_name: topicName } })
            .then(res => {
                console.log(res.data);
                this.setState({subtopic_array: res.data});
                this.state.subtopic_array = res.data;
                if(res.data == 0) {
                    this.setState({subtopic: "Subtopic"});
                    this.state.subtopic = "Subtopic";
                }
            })
        }
    }

    handleSubtopic = (e) => {
        this.setState({subtopic: e});
        this.state.subtopic = e;
        console.log("subtopic --> ", this.state.subtopic);

        const subtopicName = this.state.subtopic;
        // if(subtopicName != 'Subtopic' && subtopicName != "") {
        //     axios.get(`http://localhost:5000/category_instructor`,  { params: { subtopic_name: subtopicName } })
        //     .then(res => {
        //         console.log(res.data);
        //         this.setState({category_array: res.data});
        //         this.state.category_array = res.data;
        //         if(res.data == 0) {
        //             this.setState({category: "Category"});
        //             this.state.category = "Category";
        //         }
        //     })
        // }
    }

    handleTitle = (e) => {
        this.setState({title: e});
        this.state.title = e;
        console.log("tutorial title --> ", this.state.title);
    }

    handleShortDesc = (e) => {
        this.setState({short_desc: e});
        this.state.short_desc = e;
        console.log("short desc --> ", this.state.short_desc);
    }

    /// image add
    handleTutorial_figure = (image) => {
        this.setState({tutorial_figure: image});
        this.state.tutorial_figure = image;
        // console.log("tutorial_figure --> ", this.state.tutorial_figure);

        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // }

        // axios.post(`http://localhost:5000/uploadImage2`, image, config)
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

    }

    // video upload
    handleTutorial_video = (video) => {
        this.setState({tutorial_video: video});
        this.state.tutorial_video = video;
    }

    handleTutorial = (e) => {
        // this.setState({tutorial_text: e});
        this.state.tutorial_text.html_text = e;
        console.log("tutorial_text --> ", this.state.tutorial_text);
    }

    onFileUpload = () => {
        const Tutorial ={
            topic: this.state.topic,
            subtopic: this.state.subtopic,
            title: this.state.title,
            about: this.state.short_desc,
            type: this.state.tutorial_type,
            text: this.state.tutorial_text,
            image: this.state.tutorial_figure,
            video: this.state.tutorial_video
        }

        axios.post(`http://localhost:5000/uploadTutorial`, Tutorial)
            .then(res => {
                console.log(res);

                const tutorial_id = res.data;
                console.log("new tutorial id --> ", tutorial_id);

                // upload image/video
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    },
                }

                if(this.state.tutorial_figure != null) {
                    // Create an object of formData
                    const formData = new FormData();
                    // Update the formData object
                    formData.append(
                        "file",
                        this.state.tutorial_figure,
                    );

                    // "?" + (new URLSearchParams({id: tutorial_id})).toString()
                    axios.post(`http://localhost:5000/uploadTutorialImage/`+ tutorial_id 
                    , formData, config)
                        .then(res => {
                            console.log("Tutorial Image");
                            console.log(res.data);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }

                if(this.state.tutorial_video != null) {
                    // Create an object of formData
                    const formData = new FormData();
                    // Update the formData object
                    formData.append(
                        "file",
                        this.state.tutorial_video,
                    );

                    // "?" + (new URLSearchParams({id: tutorial_id})).toString()
                    axios.post(`http://localhost:5000/uploadTutorialVideo/`+ tutorial_id 
                    , formData, config)
                        .then(res => {
                            console.log("Tutorial Video");
                            console.log(res.data);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }

                
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
            return (
                <>
                    <main>
                    <section id="tutorial">
                        <div className="container-fluid">
                       
                            {/* <Box borderRadius="50%" {...defaultProps} /> */}
                            {/* <h3> 
                                Create a New Tutorial!
                            </h3> */}


                            {/* <Dropdown /> */}
                            <DropdownButton
                                menuAlign="left"
                                title={this.state.topic}
                                id="dropdown-menu-align-left"
                                style={{ 
                                    marginLeft: '-25%', 
                                    marginTop: '2%', maxHeight: '3em'
                                    , maxWidth: '70%'
                                }}
                                onSelect={this.handleTopic}
                                >
                                
                                {this.state.topic_array.map((topics) => (
                                    <Dropdown.Item eventKey={topics.topic_name}>{topics.topic_name}</Dropdown.Item>
                                ))}

                            </DropdownButton>

                            <DropdownButton
                                menuAlign="left"
                                title={this.state.subtopic}
                                id="dropdown-menu-align-left"
                                style={{ 
                                    marginLeft: '-25%', 
                                    marginTop: '2%', 
                                    maxHeight: '3em'
                                    , maxWidth: '70%'
                                }}
                                onSelect={this.handleSubtopic}
                                >
                                
                                {this.state.subtopic_array.map((subtopic_name) => (
                                    <Dropdown.Item eventKey={subtopic_name}>{subtopic_name}</Dropdown.Item>
                                ))}

                            </DropdownButton>

                            <br></br>

                            <Textfield label = "Title of the Tutorial" setText={this.handleTitle} type='text'/>
                            <Textfield label = "Short Description about the Context" setText={this.handleShortDesc} type='text'/>

                            {/* <div className="checkbox">
                                <Checkbox />
                            </div> */}
                            {/* <Videoup /> */}
                            <Imageup setFigure={this.handleTutorial_video}  buttonName="Upload Video" type="tutorial"/> 
                            
                            <Box borderRadius={4} {...defaultProps}>
                            <Htmleditor setHTML={this.handleTutorial}/>
                            </Box>

                            <Imageup setFigure={this.handleTutorial_figure}  buttonName="Upload Image" type="tutorial"/>
                            
                            <Button variant="primary" size="sm" style={{ marginLeft: 20, marginTop: 10, maxWidth: '10em', maxHeight: '3em' }}
                                onClick={this.onFileUpload}>
                                Submit Tutorial
                            </Button>

                        </div>
                    </section>
                    </main>
                </>
            );
    }
}


export default CreateTutorial;

// https://6-4-0--reactstrap.netlify.app/components/navbar/
// https://reactjs.org/docs/fragments.html

// https://material-ui.com/components/text-fields/

// react video upload: 
// 1. https://dev.to/chandrapantachhetri/responsive-react-file-upload-component-with-drag-and-drop-4ef8 
// 2. https://bezkoder.com/material-ui-file-upload/