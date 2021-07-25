import React from 'react';
import axios from "axios";

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
 
import Sidenav from "../UIToolsInstructor/sideNav";
import Reviserittenq from "../UIToolsInstructor/reviseWrittenQ";
import Dynamicaddques from "../UIToolsInstructor/dynamic_ques_add";
import Gradenew from "../UIToolsInstructor/GradeNew";
import "./ExamCorner2.css";
import Popupwindow from "../UIToolsInstructor/ExamCorner1_1";
import create_exam from "../../Resources/ImagesInstructor/create_exam.png";


class ExamCorner2 extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        user_id: '',
        nav_selected: '',
        popup: true,
        saved: false,
        exam_title: '',
        exam_type: '',
        exam_level: '',
        exam_paper: {
          title: '',
          type: '',
          level: '',
          question_array: []
        },

        modContentShown: false,
        forwardedQ: null, 
        revisingOne: false,
        revisingQ: null
      }
      this.handleSelected = this.handleSelected.bind(this);
      this.handlePopup = this.handlePopup.bind(this);
      this.handleSave = this.handleSave.bind(this);
      this.newQues = this.newQues.bind(this);

      this.setTitle = this.setTitle.bind(this);
      this.setType = this.setType.bind(this);
      this.setLevel = this.setLevel.bind(this);
      this.setQuesArray = this.setQuesArray.bind(this);

      this.showContents = this.showContents.bind(this);
      this.hideContents = this.hideContents.bind(this);

      this.reviseNow = this.reviseNow.bind(this);
      this.closeRevise = this.closeRevise.bind(this);
  }

  componentDidMount() {
    this.setState({user_id: this.props.user_id});
    this.state.user_id = this.props.user_id;
    console.log("user id --> ", this.state.user_id);
  }

  handleSelected = (selected) => {
  //  console.log("selected: ", selected);
   this.setState({nav_selected: selected});
    this.state.nav_selected = selected;
    
    //console.log("nav_selected: ", selected);
  }

  handlePopup = (e) => {
    this.setState({popup: e});
    this.state.popup = e;
  }

  handleSave = () => {
    this.setState({saved: true});
    this.state.saved = true;
  }

  newQues = () => {
    this.setState({saved: false, popup: true});
    this.state.popup = true;
    this.state.saved = false;
  }

  setTitle = (e) => {
    this.setState({exam_title: e});
    // console.log("setting title --> ", this.state);
    this.state.exam_title = e;
    this.state.exam_paper.title = e;
  }

  setType = (e) => {
    this.setState({exam_type: e});
    // console.log("setting exam_type --> ", this.state);
    this.state.exam_type = e;
    this.state.exam_paper.type = e;
  }

  setLevel = (e) => {
    this.setState({exam_level: e});
    // console.log("setting exam_level --> ", this.state);
    this.state.exam_level = e;
    this.state.exam_paper.level = e;
  }

  setQuesArray = (e) => {
    // this.setState({exam_paper.question_array: e});
    // console.log("setting exam_level --> ", this.state);
    this.state.exam_paper.question_array = e;
    // this.setState({exam_paper: this.state.exam_paper});
    // ---------------- submit here
   

    if(this.state.exam_paper != null) {
      const Question = {
        user_id: this.state.user_id,
        level: this.state.exam_level,
        type: this.state.exam_type,
        title: this.state.exam_title,
        question_array: this.state.exam_paper.question_array
      };
      console.log("will submit this --> ", Question);
      axios.post(`http://localhost:5000/uploadWrittenQues`, Question)
      .then(res => {
          console.log(res);
          console.log(res.data);

         
          // Question = this.state.exam_paper;
          // console.log("Question cleared? ", Question);
      })
      .then(res => {
        this.setState({exam_paper: []});
        this.state.exam_paper = [];
      })
  }
  }

  showContents = () => {
    console.log("will load contents");
    

    // ask server to send contents that require modifications
    axios.get(`http://localhost:5000/loadForwaredQues`)
      .then(res => {
          this.setState({forwardedQ: res.data});
          this.state.forwardedQ = res.data;
          console.log("forwarded Ques --> ", this.state.forwardedQ);

          this.setState({modContentShown: true});
          this.state.modContentShown = true;

      })
      .catch((error) => {
        console.log(error);
    });

  }

  hideContents = () => {
    console.log("will hide contents");
    this.setState({modContentShown: false});
    this.state.modContentShown = false;
  }

  reviseNow = (ques) => {
    console.log("revising a content..");
    console.log("content --> ", ques);

    this.setState({revisingOne: true});
    this.state.revisingOne = true;

    this.setState({revisingQ: ques});
    this.state.revisingQ = ques;
    
  }

  closeRevise = () => {
    this.setState({revisingOne: false});
    this.state.revisingOne = false;

    this.setState({revisingQ: null});
    this.state.revisingQ = null;

    this.showContents();
  }
      
  render() { 
      return (
          <div>
              <Sidenav setNav={this.handleSelected} currentValue={this.state.nav_selected}/>

              {this.state.nav_selected=="New Exam/Create Outline"?

              <div>
                {this.state.popup && <Popupwindow setNav={this.handleSelected} popup={this.handlePopup} 
                  setTitle={this.setTitle} setType={this.setType} setLevel={this.setLevel}
                />}
                
                {!this.state.popup && !this.state.saved && 
                <div id="ques_container">
                <div className="card ques_card2 border-dark" style={{minWidth: '80%'}}>
                      <div className="card-body">
                      
                          <div>
                            <h3 className="card-title">Question Paper Outline</h3>
                            {/* {console.log("nav_selected --> ", this.state.nav_selected)} */}
                            <div style={{maxWidth: '90%', marginRight: '5%'}}>
                              <Dynamicaddques setSaved={this.handleSave}  setQuesArray={this.setQuesArray}/>
                            </div>
                          </div>
                          
                      {/* <input type="submit" id="submit" className="submit" onClick={this.handleLangChange}/>  */}
                                          
                      </div>
                    </div>
                </div>  
                } 

                {this.state.saved && 
                <div id="grade" style={{ marginTop: '10%'}}>
                  <h3>Thank you.</h3>
                  <h3>Contribute by creating new question!</h3>
                  <Button variant="primary" size="sm" style={{ marginTop: '2%', maxWidth: '12em', maxHeight: '3em'}}
                        onClick={this.newQues}
                        >
                        New Question Outline 
                  </Button>
                </div>}

                </div>

              :

              <div>

                  {this.state.nav_selected=="New Exam/Modify Content"?
                  // style={{ marginTop: '5%'}}
                    <div id="grade" >
                      { !this.state.revisingOne && 
                        <h4> 
                          Contents here require modifications.
                       </h4>
                      }

                      {
                        this.state.modContentShown && 
                        <div>
                          {
                            !this.state.revisingOne &&
                            <Button variant="primary" size="sm" style={{ 
                              // marginLeft: '39%', 
                              marginTop: '2%', maxWidth: '12em', maxHeight: '3em'}}
                              onClick={this.hideContents}
                              >
                              Hide Contents
                            </Button>
                          }
                          

                          <ul>
                           
                            { this.state.forwardedQ.map((listItems)=>{
                              return (
                                <div>
                            
                                    {
                                      !this.state.revisingOne &&
                                      <div>
                                        <li>Question ID: {listItems.question_id}</li>
                                          <Button variant="primary" size="sm" style={{ marginTop: 10, maxWidth: '8em', maxHeight: '3em' }}
                                              onClick={ () => {
                                                  this.reviseNow(listItems)
                                              }}
                                              >
                                              Revise
                                          </Button>
                                      </div>
                                    }

                                </div>
                              )
                              })
                            }

                            {this.state.revisingOne &&
                              <Reviserittenq ques={this.state.revisingQ} closeRevise={this.closeRevise}/>
                            }

                          </ul>
                        </div>
                      }


                      {
                        !this.state.modContentShown &&
                        <Button variant="primary" size="sm" style={{ 
                          // marginLeft: '39%', 
                          marginTop: '2%', maxWidth: '12em', maxHeight: '3em'}}
                          onClick={this.showContents}
                          >
                          Show Contents
                        </Button>
                      }
                      
                    </div>
                  :
                  <div>

                  {this.state.nav_selected=="Grade Submissions/New"?
                    <div id="grade">     
                      {/* <h5>Grade Answer Paper</h5> */}
                      {/* {console.log("nav_selected --> ", this.state.nav_selected)} */}
                        <Gradenew user_id={this.state.user_id}/>
                    </div>
                    :
                    <div>

                      <div id="grade">    
                        <img
                                className="welcome-img mx-left"
                                src={create_exam}
                                style={{minHeight: '40%', minWidth: '40%'}}
                            /> 
                        <br/><br/>
                        <h3>Create Quality Contents.</h3>
                        <h3>And Grade Anywhere, Anytime.</h3>
                        {/* {console.log("nav_selected --> ", this.state.nav_selected)} */}
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