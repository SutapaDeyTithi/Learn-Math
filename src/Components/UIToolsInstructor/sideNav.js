import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import "./sideNav.css";

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
          <div className="sidemenu">
        <SideNav style={{ marginTop: '3em', position: "fixed", background: '#555' }}
        expanded='true'
    onSelect={(selected) => {
        // Add your code here
        console.log("side nav: selected: ", selected);
        if(selected == "Create Outline") {
            console.log("Inside ", selected);
        }
    }}
>
    {/* <SideNav.Toggle/> */}
    <SideNav.Nav defaultSelected="Create Outline" style={{ marginTop: '.8em'}}>
        <NavItem eventKey="Create Outline">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Create Outline
            </NavText>
        </NavItem>
        <NavItem eventKey="Grade Submissions">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Grade Submissions
            </NavText>
            <NavItem eventKey="Grade Submissions/New">
                <NavText>
                    Grade new
                </NavText>
            </NavItem>
            <NavItem eventKey="Grade Submissions/Regrade">
                <NavText>
                    Regrade
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
</div>

if(this.state.nav_selected == "Create Outline") {
    <p>
        {this.state.nav_selected}
    </p>
}

</div>
      );
  }
}

export default ExamCorner2;