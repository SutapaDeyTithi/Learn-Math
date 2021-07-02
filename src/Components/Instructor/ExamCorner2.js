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
    console.log("selected: ", selected);
    this.state.nav_selected = selected;
    console.log("nav_selected: ", selected);
  }
      
  render() { 
    var selc = this.state.nav_selected;
    console.log("here ** ", selc);
    if(selc == "Create Outline") {
      console.log("if --> ", this.state.nav_selected);
      return (
          <div>
              <Sidenav setNav={this.handleSelected}/>
   
              <div id="ques_container">
              <div className="card ques_card2 border-dark" style={{minWidth: '80%'}}>
                    <div className="card-body">
                    
                        <div>
                          <h3 className="card-title">Question Paper Outline</h3>
                          {/* <Dynamicaddques /> */}
                        </div>
                        
                    {/* <input type="submit" id="submit" className="submit" onClick={this.handleLangChange}/>  */}
                                        
                    </div>
                    </div>
                </div>           
          </div>
      );
    }
    else {
      console.log("else --> ", this.state.nav_selected);
        return (
          <div>
            <h3 className="card-title">Grade Answer Paper</h3>
              {/* <Dynamicaddques /> */}
          </div>
        )
    }
  }
}

export default ExamCorner2;