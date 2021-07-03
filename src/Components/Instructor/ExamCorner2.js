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

class ExamCorner2 extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        nav_selected: 'Create Outline'
      }
      this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected = (selected) => {
   // console.log("selected: ", selected);
    this.state.nav_selected = selected;
    this.setState({nav_selected: selected});
    //console.log("nav_selected: ", selected);
  }
      
  render() { 
      return (
          <div>
              <Sidenav setNav={this.handleSelected} currentValue={this.state.nav_selected}/>

              {this.state.nav_selected=="Create Outline"?
                

                <div id="ques_container">
                <div className="card ques_card2 border-dark" style={{minWidth: '80%'}}>
                      <div className="card-body">
                      
                          <div>
                            <h3 className="card-title">Question Paper Outline</h3>
                            {console.log("nav_selected --> ", this.state.nav_selected)}
                            <Dynamicaddques />
                          </div>
                          
                      {/* <input type="submit" id="submit" className="submit" onClick={this.handleLangChange}/>  */}
                                          
                      </div>
                    </div>
                </div>   

              :

              <div id="ques_container">
                <div className="card ques_card2 border-dark" style={{minWidth: '80%'}}>
                      <div className="card-body">

                      <div>
                        <h3 className="card-title">Grade Answer Paper</h3>
                        {console.log("nav_selected --> ", this.state.nav_selected)}
                          <Gradenew />
                      </div>

                      </div>
                  </div>
              </div>  

              }
   
                      
          </div>
      );
    
  }
}

export default ExamCorner2;