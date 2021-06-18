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
import Popupwindow from "../UIToolsInstructor/popupWindow";


import "./CreateTutorials.css";

import Box from '@material-ui/core/Box';
// import welcome from "";

// import from materials-ui
const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    align: 'center',
    style: { width: '100%', height: '100vh', borderColor: '#D3D3D3'},
  };


class ExamCorner extends Component {
    render() {
            return (
                <>
                    <main>
                    <section id="tutorial">
                        <div className="container-fluid">
                            <h3> 
                                Create a New Exam Question.
                            </h3>
                            <Popupwindow />
                        </div>
                    </section>
                    </main>
                </>
            );
    }
}


export default ExamCorner;

// https://material-ui.com/components/dialogs/
//https://codesandbox.io/s/icy-forest-kosj7?fontsize=14&file=/src/styles.css 