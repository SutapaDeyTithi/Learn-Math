import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import "./sideNav.css";

class sideNav extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        nav_selected: 'Create Outline'
      }
      
  }

  handleSelected = (selected) => {
    // console.log("Event: selected: ", selected);
    this.state.nav_selected = selected;
    this.props.setNav(selected);
  }
      
  render() {
      return (
          <div>
          <div className="sidemenu">
            <SideNav style={{ marginTop: '3em', position: "fixed", background: '#555' }}
            expanded='true'
            onSelect={(selected) => {
                // Add your code here
                //console.log("side nav: selected: ", selected);
                // if(selected == "Create Outline") {
                //     console.log("Inside ", selected);
                // }
                this.handleSelected(selected)
            }}
            // onClick={this.handleSelected(selected)}
        >
    {/* <SideNav.Toggle/> */}
    <SideNav.Nav defaultSelected={this.props.currentValue} style={{ marginTop: '.8em'}}>
        <NavItem eventKey="New Exam">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                New Exam
            </NavText>

            {/* <NavItem eventKey="New Exam/Exam Settings">
                <NavText>
                Exam Settings
                </NavText>
            </NavItem> */}

            <NavItem eventKey="New Exam/Create Outline">
                <NavText>
                Create Outline
                </NavText>
            </NavItem>

            <NavItem eventKey="New Exam/Modify Content">
                <NavText>
                Modify Content
                </NavText>
            </NavItem>

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
            {/* <NavItem eventKey="Grade Submissions/Regrade">
                <NavText>
                    Regrade
                </NavText>
            </NavItem> */}
            <NavItem eventKey="Grade Submissions/Graded">
                <NavText>
                 Graded
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
</div>

</div>
      );
  }
}

export default sideNav;