import React, { Component } from "react";
import { NavLink ,Link} from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
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
    DropdownItem
} from 'reactstrap';
import i18n from "i18next";
import "./NavigationBar.css";
import avatar from "../Resources/Images/image 33.png";
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
                <Navbar className="navbar-expand-lg fixed-top " light>
                    <NavbarBrand href="/">
                        <div className="logo">
                            <img src={logo_image} className="logo_image" />
                            {i18n.t("Learn Math")}

                        </div>

                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            <NavItem>
                                <NavLink className="nav-links" to="">
                                    {i18n.t("Problem of the week")}
                                </NavLink>
                            </NavItem>


                            <li class="divider-vertical-second-menu"></li>
                            <NavItem>
                                <NavLink className="nav-links" to="">
                                    {i18n.t("Regular Test")}
                                </NavLink>
                            </NavItem>


                            <li class="divider-vertical-second-menu"></li>
                            <NavItem>
                                <NavLink className="nav-links" to="/practice">
                                    {i18n.t("Practice")}
                                </NavLink>
                            </NavItem>
                            <li class="divider-vertical-second-menu"></li>
                            <NavItem>
                                <NavLink className="nav-links" to="/tutorial">
                                    {i18n.t("Tutorial")}
                                </NavLink>
                            </NavItem>
                            <li class="divider-vertical-second-menu"></li>
                            <NavItem>
                                <NavLink className="nav-links" to="">
                                    {i18n.t("Forum")}
                                </NavLink>
                            </NavItem>

                            {/* <NavItem>
                            
                            </NavItem> */}
                            <Link to="/profile">
                            <img src={avatar} />
                            </Link>
                            <NavItem style={{ paddingLeft: 10 }}>
                                <NavLink className="nav-links" to="/">
                                {i18n.t("Sign Out")}
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
