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
import "./NavigationBar.css";
import logo_image from "../Resources/Images/image 6.png";

class NavigationBar extends Component {
    state = {
        isOpen: false,
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    render() {
        return (
            <>
                <Navbar className="navbar-expand-lg fixed-top" light>
                    <NavbarBrand href="/">
                        <div className="logo">
                        <img src={logo_image} className="logo_image"/>
                            { i18n.t("Learn Math") }
                            
                        </div>
                        
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>                            
                            <NavItem className="nav-item2">
                            <NavLink className="nav-links" to="/first" style={{color:"white"}}>
                                    Sign In
                                </NavLink>
                                
                            </NavItem>
                            <li class="divider-vertical-second-menu2"></li>
                            <NavItem className="nav-item3">
                            <NavLink className="nav-links" to="/register" style={{color:"white"}}>
                                    Register
                                </NavLink>
                                
                            </NavItem>
                            
                        </Nav>
                    </Collapse>
                    
                </Navbar>
            </>
        );
    }
}

export default NavigationBar;

// https://6-4-0--reactstrap.netlify.app/components/navbar/
// https://reactjs.org/docs/fragments.html
