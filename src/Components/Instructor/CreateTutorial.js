import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import i18n from "i18next";
import Textfield from "../UIToolsInstructor/textField";
import Checkbox from "../UIToolsInstructor/checkBox";
import Htmleditor from "../UIToolsInstructor/htmlEditor";
import Dropdown from "../UIToolsInstructor/dropdwon";
import Button from "../UIToolsInstructor/button";
import Videoup from "../UIToolsInstructor/videoUp";

import "./CreateTutorials.css";

import Box from '@material-ui/core/Box';
// import welcome from "";

// import from materials-ui
const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: { width: '100%', height: '50vh', borderColor: '#D3D3D3' },
  };


class CreateTutorial extends Component {
    render() {
            return (
                <>
                    <main>
                    <section id="tutorial">
                        <div className="container-fluid">
                       
                            {/* <Box borderRadius="50%" {...defaultProps} /> */}
                            <h3> 
                                Create a New Tutorial!
                            </h3>
                            <Dropdown />
                            <Textfield label = "Title of the Tutorial"/>
                            <Textfield label = "Short Description about the Context"/>
                            <div className="checkbox">
                                <Checkbox />
                            </div>
                            <Videoup />
                            <Box borderRadius={4} {...defaultProps}>
                            <Htmleditor />
                            </Box>
                            <Button label="Upload"/>
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