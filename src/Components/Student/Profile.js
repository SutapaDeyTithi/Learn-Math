import React, { Component } from "react";
import './Profile.css'
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
import axios from 'axios';
import Select from '@material-ui/core/Select';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 0,
            name: "ppp",
            class: "-1",
            school: "",
            email: "bbbbb",
            user_array: []
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

        this.setState({
            email: e.target.value
        });
        

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
    set_name = e => {

    }
    save_edit = e => {
        this.setState({ mode: 0 });
        const Question = {
            user_id: this.props.user_id,
            email:this.state.email,
            //class:this.state.class,
            //user_name:this.user_name
        };
        if(this.state.email !="bbbbb"){
        axios.post('http://localhost:5000/mail_change', Question)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        }
        // if(this.state.class !="-1"){
        //     const Question2 = {
        //         user_id: this.props.user_id,
        //         class:this.state.class
        //         //class:this.state.class,
        //         //user_name:this.user_name
        //     };
        //     axios.post('http://localhost:5000/class_change', Question2)
        //         .then(res => {
        //             console.log(res);
        //             console.log(res.data);
    
    
        //             // Question = this.state.exam_paper;
        //             // console.log("Question cleared? ", Question);
        //         })
        //     }
        fetch("http://localhost:5000/all_user")
            .then(res => res.json())
            .then(json => this.setState({ user_array: json }));
    }
    componentDidMount() {
        console.log(this.props.user_id);
        fetch("http://localhost:5000/all_user")
            .then(res => res.json())
            .then(json => this.setState({ user_array: json }));
        console.log(this.state.user_array);

    }
    render() {
        return (
            <div className="profile">
                {
                    !this.state.mode
                        ? (
                            <div className="profile_body card" style={{ borderStyle: "outset", borderColor: "green" }}>
                                <div className="contents">
                                    {this.state.user_array.filter(el => el.user_id === this.props.user_id).map(filteredName => (
                                        <div>
                                            <h6><AccountBoxOutlinedIcon /> {filteredName.user_name} <EditIcon style={{ marginLeft: 350 }} onClick={this.edit} /></h6>
                                            <li style={{ paddingTop: 7, listStyleType: "none" }}></li>
                                            <h6><ClassIcon /> Class : {filteredName.class}</h6>
                                            <li style={{ paddingTop: 7, listStyleType: "none" }}></li>
                                            <h6><MailOutlineIcon /> {filteredName.email}</h6>

                                            <li style={{ paddingTop: 7, listStyleType: "none" }}></li>
                                            <h6><StarBorderIcon /> Contribution : {filteredName.contribution}</h6>
                                            <li style={{ paddingTop: 7, listStyleType: "none" }}></li>
                                            <h6><StarsOutlinedIcon /> Current Rating : {filteredName.rank}</h6>
                                            <li style={{ paddingTop: 7, listStyleType: "none" }}></li>
                                            <h6><AccountBalanceOutlinedIcon /> Current Level :{filteredName.level}</h6>

                                        </div>))}
                                </div>
                            </div>

                        )
                        : (<div className="profile_body2 card">
                            <div className="contents">
                                {this.state.user_array.filter(el => el.user_id === this.props.user_id).map(filteredName => (
                                    <div>
                                        <label style={{ paddingTop: 4, marginRight: 68 }}>Name </label>
                                        <TextField

                                            id="outlined"
                                            onChange={this.change_name}
                                            defaultValue={filteredName.user_name}
                                            variant="outlined"

                                        />
                                        {/* <li style={{ paddingTop: 10, listStyleType: "none" }}></li>
                                <label style={{ paddingTop: 4, marginRight: 4 }}>School/College  </label>
                                <TextField

                                    id="outlined"
                                    style={{ width: 400 }}
                                    defaultValue={this.state.school}
                                    variant="outlined"
                                    onChange={this.change_school}
                                /> */}
                                        <li style={{ paddingTop: 10, listStyleType: "none" }}></li>
                                        <label style={{ paddingTop: 4, marginRight: 70 }}>Email  </label>
                                        <TextField

                                            id="outlined"
                                            style={{ width: 400 }}
                                            defaultValue={filteredName.email}
                                            variant="outlined"
                                            onChange={this.change_email}
                                        />
                                        <li style={{ paddingTop: 10, listStyleType: "none" }}></li>
                                        <label style={{ paddingTop: 10, marginRight: 75 }}>Class  </label>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={this.state.class}
                                            //defaultValue={filteredName.class}
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
                                            <button className="btn btn-primary custom" onClick={this.save_edit}>Save</button>
                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>)
                }

            </div>
        )
    }
}
export default Profile;