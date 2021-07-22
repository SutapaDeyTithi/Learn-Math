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

            submitted: false,
            warning: false,
            discard: false,
            discarded: false
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

        this.newTutorial = this.newTutorial.bind(this);
        this.discardTutorial = this.discardTutorial.bind(this);
        this.showWarning = this.showWarning.bind(this);
        this.hideWarning = this.hideWarning.bind(this);
    }

    showWarning = () => {
        this.setState({warning: true});
        this.state.warning = true;
    }

    hideWarning = () => {
        this.setState({warning: false});
        this.state.warning = false;
    }

    componentDidMount() {

        fetch("http://localhost:5000/topic")
            .then(res => res.json())
            .then(json => this.setState({ topic_array: json }));
        console.log("topic array --> ", this.state.topic_array);
    }

    newTutorial () {
        this.setState({
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

            submitted: false,
            warning: false,
            discard: false,
            discarded: false
        })
        this.componentDidMount();
    }

    discardTutorial () {
        this.setState({discard: true});
        this.state.discard = true;
    }

    handleTopic = (e) => {
        this.hideWarning();

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
        this.hideWarning();
        
        this.setState({subtopic: e});
        this.state.subtopic = e;
        console.log("subtopic --> ", this.state.subtopic);

        const subtopicName = this.state.subtopic;
    }

    handleTitle = (e) => {
        this.hideWarning();

        this.setState({title: e});
        this.state.title = e;
        console.log("tutorial title --> ", this.state.title);
    }

    handleShortDesc = (e) => {
        this.hideWarning();

        this.setState({short_desc: e});
        this.state.short_desc = e;
        console.log("short desc --> ", this.state.short_desc);
    }

    /// image add
    handleTutorial_figure = (image) => {
        this.hideWarning();

        this.setState({tutorial_figure: image});
        this.state.tutorial_figure = image;
    }

    // video upload
    handleTutorial_video = (video) => {
        this.hideWarning();

        this.setState({tutorial_video: video});
        this.state.tutorial_video = video;
    }

    handleTutorial = (e) => {
        this.hideWarning();

        // this.setState({tutorial_text: e});
        this.state.tutorial_text.html_text = e;
        console.log("tutorial_text --> ", this.state.tutorial_text);
    }

    onFileUpload = () => {
        this.hideWarning();

        const Tutorial ={
            topic: this.state.topic,
            subtopic: this.state.subtopic,
            title: this.state.title,
            about: this.state.short_desc,
            text: this.state.tutorial_text,
            image: this.state.tutorial_figure,
            video: this.state.tutorial_video
        }
        var fileUp = false;
        var imageUp = false;
        var videoUp = false;

        if(Tutorial.topic == "Topic" || Tutorial.topic == "" 
            || Tutorial.subtopic == "Subtopic" || Tutorial.subtopic == ""
            || Tutorial.title == "Title" || Tutorial.title == ""
            || Tutorial.about == "Short Description" || Tutorial.about == "" 
            || Tutorial.text.html_text == "" 
            )
        {
            this.showWarning();
        }
        else {
            axios.post(`http://localhost:5000/uploadTutorial`, Tutorial)
            .then(res => {
                console.log(res);

                const tutorial_id = res.data;
                console.log("new tutorial id --> ", tutorial_id);
                fileUp = true;

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
                            imageUp = true;
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
                            videoUp = true;
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }

                
            })
            .then(res => {
                if(fileUp && (imageUp || this.state.tutorial_figure == null) && (videoUp || this.state.tutorial_video == null)) {
                    this.setState({submitted: true});
                    this.state.submitted = true;
                }
                else {
                    this.setState({submitted: false});
                    this.state.submitted = false;
                }
            })
            .catch((error) => {
                console.log(error);
            });
        }
        
    }

    onFileDiscard = () => {
        this.setState({discarded: true});
        this.state.discarded = true;
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

                            {!this.state.submitted && !this.state.discarded &&
                            <div>
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

                                {
                                    this.state.warning ? 
                                    <h6 style={{color: 'red', marginTop: 20, marginLeft: 50}}> Some of your fields are empty. Cannot submit. </h6>
                                    :
                                    <div></div>
                                }
                                
                                <Button variant="primary" size="sm" style={{ marginLeft: 20, marginTop: 10, maxWidth: '10em', maxHeight: '3em' }}
                                    onClick={this.onFileUpload}>
                                    Submit Tutorial
                                </Button>

                                <Button variant="primary" size="sm" style={{ marginLeft: 20, marginTop: 10, maxWidth: '10em', maxHeight: '3em' }}
                                    onClick={this.onFileDiscard}>
                                    Discard Tutorial
                                </Button>

                            </div>
                            }


                            {this.state.submitted && 
                                <div style={{ marginTop: '5%'}}>
                                    <h3>Thank you for your contribution.</h3>
                                    <Button variant="primary" size="sm" style={{ marginTop: '2%', maxWidth: '12em', maxHeight: '3em'}}
                                        onClick={this.newTutorial}
                                        >
                                        New Tutorial
                                    </Button>
                                </div>
                            }

                            {this.state.discarded && 
                                <div  style={{ marginTop: '5%'}}>
                                    <h3>Thank you.</h3>
                                    <h3>Contribute by creating new tutorial.</h3>
                                    <Button variant="primary" size="sm" style={{ marginTop: '2%', maxWidth: '12em', maxHeight: '3em'}}
                                        onClick={this.newTutorial}
                                        >
                                        New Tutorial
                                    </Button>
                                </div>
                            }

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