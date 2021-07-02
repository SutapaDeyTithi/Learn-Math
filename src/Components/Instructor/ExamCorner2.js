import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
 
import Sidenav from "../UIToolsInstructor/sideNav";
import Dynamicaddques from "../UIToolsInstructor/dynamic_ques_add";
import "./ExamCorner2.css";

class ExamCorner2 extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        nav_selected: 'Create Outline'
      }
      
  }

  handleSelected = (selected) => {
    console.log("Event: selected: ", selected);
    this.state.nav_selected = selected;
  }
      
  render() {
      return (
          <div>
              <Sidenav/>
   
              <div id="ques_container">
              <div className="card ques_card2 border-dark" style={{minWidth: '80%'}}>
                    <div className="card-body">
                        <h3 className="card-title">Question Paper Outline</h3>
                        <Dynamicaddques />
                  
                    
                        
                    {/* <input type="submit" id="submit" className="submit" onClick={this.handleLangChange}/>  */}
                                        
                    </div>
                    </div>
                </div>           
          </div>
      );
  }
}

export default ExamCorner2;