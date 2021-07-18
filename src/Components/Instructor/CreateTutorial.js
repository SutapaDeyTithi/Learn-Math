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
            tutorial_text: '',
            tutorial_video: null,
            tutorial_image: null,

            topic_array: [],
            subtopic_array: [],
        }
        // this.createNewTutorial = this.createNewTutorial.bind(this);
        // this.saveTutorial = this.saveTutorial.bind(this);

        this.handleTopic = this.handleTopic.bind(this);
        this.handleSubtopic = this.handleSubtopic.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleShortDesc = this.handleShortDesc.bind(this);
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

                            <div className="checkbox">
                                <Checkbox />
                            </div>
                            {/* <Videoup /> */}
                            <Imageup /> 
                            
                            <Box borderRadius={4} {...defaultProps}>
                            <Htmleditor />
                            </Box>
                            
                            <Button variant="primary" size="sm" style={{ marginLeft: 20, marginTop: 10, maxWidth: '5em', maxHeight: '3em' }}
                                onClick={this.onFileUpload}>
                                Upload
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