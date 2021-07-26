import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
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

import "./NavigationBar.css";
import logo_image from "../../Resources/Images/image 6.png";
import avatar from "../../Resources/Images/image 33.png";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import Badge from "@material-ui/core/Badge";


import {
  feedback_database,
  suggestion_database,
  report_database,
  database
} from "../Moderator/moddatabase";


class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isOpen: false,
    count:
      feedback_database.length +
      suggestion_database.length +
      report_database.length +
      database.length,
    isO: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  onSubmitSignOut = () => {
    this.props.onRouteChange("signout");
  };


  /*onClickNotification2 = () => {
    <Collapse in={this.state.isO} timeout="auto" unmountOnExit>
      <
    </Collapse>
    this.setState({
      count: 0,
    });
    console.log("in", this.state.count);
  };*/

  render() {
    if (!this.props.isSignedIn) {
      return (
        <>
          <Navbar className="navbar-expand-lg fixed-top" light>
            <NavbarBrand href="/">
              <div className="logo">
                <img src={logo_image} className="logo_image" />
                Learn Math
              </div>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />

            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="nav-item2">
                  <NavLink
                    className="nav-links"
                    to="/signin"
                    style={{ color: "white" }}
                  >
                    Sign In
                  </NavLink>
                </NavItem>
                <li className="divider-vertical-second-menu2"></li>
                <NavItem className="nav-item3">
                  <NavLink
                    className="nav-links"
                    to="/register"
                    style={{ color: "white" }}
                  >
                    Register
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </>
      );
    } else {
      if (this.props.role == "student") {
        return (
          <>
            <Navbar className="navbar-expand-lg fixed-top " light>
              <NavbarBrand href="/">
                <div className="logo">
                  <img src={logo_image} className="logo_image" />
                  Learn Math
                </div>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />

              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink className="nav-links" to="">
                      Problem of the week
                    </NavLink>
                  </NavItem>

                  <li className="divider-vertical-second-menu"></li>
                  <NavItem>
                    <NavLink className="nav-links" to="">
                      Regular Test
                    </NavLink>
                  </NavItem>

                  <li className="divider-vertical-second-menu"></li>
                  <NavItem>
                    <NavLink className="nav-links" to="/authHome">
                      Practice
                    </NavLink>
                  </NavItem>
                  <li className="divider-vertical-second-menu"></li>
                  <NavItem>
                    <NavLink className="nav-links" to="/tutorial">
                      Tutorial
                    </NavLink>
                  </NavItem>
                  <li className="divider-vertical-second-menu"></li>
                  <NavItem>
                    <NavLink className="nav-links" to="">
                      Forum
                    </NavLink>
                  </NavItem>

                  {/* <NavItem>
                                
                                </NavItem> */}
                  <Link to="/profile">
                    <img src={avatar} />
                  </Link>
                  <NavItem style={{ paddingLeft: 10 }}>
                    <NavLink
                      className="nav-links"
                      to="/"
                      onClick={this.onSubmitSignOut}
                    >
                      Sign Out
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </>
        );
      } else if (this.props.role == "instructor") {
        return (
          <>
            <Navbar className="navbar-expand-lg fixed-top" light>
              <NavbarBrand href="/">
                <div className="logo">Learn Math</div>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />

              <Collapse isOpen={this.props.navStateOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink className="nav-links" to="/createTutorial">
                      Create Content
                    </NavLink>
                  </NavItem>
                  <li className="divider-vertical-second-menu"></li>
                  <NavItem>
                    <NavLink className="nav-links" to="/examCorner">
                      Exam Corner
                    </NavLink>
                  </NavItem>
                  <li className="divider-vertical-second-menu"></li>
                  <NavItem>
                    <NavLink className="nav-links" to="/forum">
                      Forum
                    </NavLink>
                  </NavItem>
                  <li className="divider-vertical-second-menu"></li>
                  <NavItem>
                    <NavLink className="nav-links" to="/forum">
                      Forum
                    </NavLink>
                  </NavItem>
                  <li className="divider-vertical-second-menu"></li>
                  <NavItem>
                    <NavLink
                      className="nav-links"
                      to="/"
                      onClick={this.onSubmitSignOut}
                    >
                      Sign Out
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </>
        );
      } else if (this.props.role == "moderator") {
        return (
          <>
            <Navbar className="navbar-expand-lg fixed-top" light>
              <NavbarBrand href="/">
                <div className="logo">Learn Math</div>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />

              <Collapse isOpen={this.props.navStateOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-links"
                      to="/dashboard"
                      activeClassName="selected"
                    >
                      Dashboard
                    </NavLink>
                  </NavItem>
                  <li className="divider-vertical-second-menu"></li>
                  <NavItem>
                    <NavLink className="nav-links" to="/checkContent">
                      Check Content
                    </NavLink>
                  </NavItem>
                  <li className="divider-vertical-second-menu"></li>
                  <NavItem>
                    <NavLink className="nav-links" to="/management">
                      Management
                      {/*<span className="circle">
                          30
                        </span>*/}
                    </NavLink>
                  </NavItem>
                  <li className="divider-vertical-second-menu"></li>
                  <NavItem>
                    <NavLink className="nav-links" to="/forum">
                      Forum
                    </NavLink>
                  </NavItem>
                  <li className="divider-vertical-second-menu"></li>
                  <NavItem>
                    <NavLink
                      className="nav-links"
                      to="/"
                      onClick={this.onSubmitSignOut}
                    >
                      Sign Out
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </>
        );
      }
    }
  }
}

export default NavigationBar;

// https://6-4-0--reactstrap.netlify.app/components/navbar/
// https://reactjs.org/docs/fragments.html
