import React, { Component } from "react";
import './editProfile.css'
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ClassIcon from '@material-ui/icons/Class';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import StarsOutlinedIcon from '@material-ui/icons/StarsOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/EditOutlined';
import MenuItem from '@material-ui/core/MenuItem';

import Select from '@material-ui/core/Select';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 0,
            name: "Karim",
            class: "3",
            school: "",
            email: "1605014@ugrad.cse.buet.ac.bd"
        }
    }
    edit = e => {
        {
            this.setState({
                mode: 1
            });
        }
    }
    change_name = e => {
        {
            this.setState({
                name: e.target.value
            });
        }
    }
    change_email = e => {
        {
            this.setState({
                email: e.target.value
            });
        }
    }
    change_school = e => {
        {
            this.setState({
                school: e.target.value
            });
        }
    }
    change_class = e => {
        {
            this.setState({
                class: e.target.value
            });
        }
    }
    render() {
        return (
            <div className="profile">
                {
                    !this.state.mode
                        ? (
                            <div className="profile_body card" style={{borderStyle:"outset",borderColor:"green"}}>
                                <div className="contents">

                                    <h6><AccountBoxOutlinedIcon /> {this.state.name} <EditIcon style={{ marginLeft: 350 }} onClick={this.edit} /></h6>
                                    <li style={{ paddingTop: 7, listStyleType: "none" }}></li>
                                    <h6><ClassIcon /> Class : {this.state.class}</h6>
                                    <li style={{ paddingTop: 7, listStyleType: "none" }}></li>
                                    <h6><MailOutlineIcon /> {this.state.email}</h6>
                                    <li style={{ paddingTop: 7, listStyleType: "none" }}></li>

                                    <h6><SchoolOutlinedIcon /> School/College : {this.state.school}</h6>
                                    <li style={{ paddingTop: 7, listStyleType: "none" }}></li>
                                    <h6><StarBorderIcon /> Contribution : 0</h6>
                                    <li style={{ paddingTop: 7, listStyleType: "none" }}></li>
                                    <h6><StarsOutlinedIcon /> Current Rating : 100</h6>
                                    <li style={{ paddingTop: 7, listStyleType: "none" }}></li>
                                    <h6><AccountBalanceOutlinedIcon /> Current Level : 4</h6>


                                </div>
                            </div>

                        )
                        : (<div className="profile_body2 card">
                            <div className="contents">

                                {/* <input id="Email" name="Email" type="text" placeholder="Full name" className="email" onChange={this.handleChange_name} />
                                <input id="Email" name="Email" type="text" placeholder="Email address" className="email" onChange={this.handleChange_email} />
                                <input id="password" name="password" type="password" placeholder="Password" className="password" onChange={this.handleChange_pass} /> */}
                                {/* <TextField defaultValue={this.state.name} onChange={this.change_name} /> */}
                                <label style={{ paddingTop: 4, marginRight: 68 }}>Name </label>
                                <TextField

                                    id="outlined"
                                    onChange={this.change_name}
                                    defaultValue={this.state.name}
                                    variant="outlined"

                                />
                                <li style={{ paddingTop: 10, listStyleType: "none" }}></li>
                                <label style={{ paddingTop: 4, marginRight: 4 }}>School/College  </label>
                                <TextField

                                    id="outlined"
                                    style={{ width: 400 }}
                                    defaultValue={this.state.school}
                                    variant="outlined"
                                    onChange={this.change_school}
                                />
                                <li style={{ paddingTop: 10, listStyleType: "none" }}></li>
                                <label style={{ paddingTop: 4, marginRight: 70 }}>Email  </label>
                                <TextField

                                    id="outlined"
                                    style={{ width: 400 }}
                                    defaultValue={this.state.email}
                                    variant="outlined"
                                    onChange={this.change_email}
                                />
                                <li style={{ paddingTop: 10, listStyleType: "none" }}></li>
                                <label style={{ paddingTop: 10, marginRight: 75 }}>Class  </label>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.class}
                                    onChange={this.change_class}
                                >
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    <MenuItem value={7}>7</MenuItem>
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={9}>9</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                </Select>
                                <div className="row">
                                <button className="btn btn-primary custom" onClick={()=>{this.setState({mode:0})}}>Save</button>
                                </div>
                            </div>
                           
                        </div>)
                }

            </div>
        )
    }
}
export default Profile;