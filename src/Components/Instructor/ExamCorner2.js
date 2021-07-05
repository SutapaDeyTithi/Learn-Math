import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
 
import Sidenav from "../UIToolsInstructor/sideNav";
import Dynamicaddques from "../UIToolsInstructor/dynamic_ques_add";
import Gradenew from "../UIToolsInstructor/GradeNew";
import "./ExamCorner2.css";
import Popupwindow from "../UIToolsInstructor/ExamCorner1_1";
import create_exam from "../../Resources/ImagesInstructor/create_exam.png";


class ExamCorner2 extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        nav_selected: ''
      }
      this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected = (selected) => {
   console.log("selected: ", selected);
   this.setState({nav_selected: selected});
    this.state.nav_selected = selected;
    
    //console.log("nav_selected: ", selected);
  }
      
  render() { 
      return (
          <div>
              <Sidenav setNav={this.handleSelected} currentValue={this.state.nav_selected}/>

              {this.state.nav_selected=="New Exam/Create Outline"?
                

                <div id="ques_container">
                <div className="card ques_card2 border-dark" style={{minWidth: '80%'}}>
                      <div className="card-body">
                      
                          <div>
                            <h3 className="card-title">Question Paper Outline</h3>
                            {console.log("nav_selected --> ", this.state.nav_selected)}
                            <div style={{maxWidth: '90%', marginRight: '5%'}}>
                              <Dynamicaddques />
                            </div>
                          </div>
                          
                      {/* <input type="submit" id="submit" className="submit" onClick={this.handleLangChange}/>  */}
                                          
                      </div>
                    </div>
                </div>   

              :

              <div>

                  {this.state.nav_selected=="New Exam/Exam Settings"?
                    <div className="container-fluid" style={{marginLeft: '10%', marginTop: '7%'}}>
                      {/* <h3> 
                          Create a New Exam Question.
                      </h3> */}
                      <Popupwindow setNav={this.handleSelected}/>
                    </div>
                  :
                  <div>

                  {this.state.nav_selected=="Grade Submissions/New"?
                    <div id="grade">     
                      <h5>Grade Answer Paper</h5>
                      {console.log("nav_selected --> ", this.state.nav_selected)}
                        <Gradenew />
                    </div>
                    :
                    <div>

                      <div id="grade">    
                        <img
                                className="welcome-img mx-left"
                                src={create_exam}
                            /> 
                        <h5>Create Quality Contents.</h5>
                        <h5>And Grade Anywhere, Anytime.</h5>
                        {console.log("nav_selected --> ", this.state.nav_selected)}
                      </div>

                    </div>
                  }

                  </div>
                  }


              </div>           
              }          
          </div>
      );
    
  }
}

export default ExamCorner2;