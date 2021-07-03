import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class gradeNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        unchecked: ["Answer Paper 1","Answer Paper 2","Answer Paper 3","Answer Paper 4","Answer Paper 5"],
        answers: ["Answer Paper 1","Answer Paper 2","Answer Paper 3","Answer Paper 4","Answer Paper 5"],
        rubriks_1: [{title: "Break point 1",
                     marks: 1},
                     {title: "Break point 2",
                     marks: 2.5},
                     {title: "Break point 3",
                     marks: 1},
                     {title: "Break point 4",
                     marks: 5.5}],
        grading_one: false
        } 
        // this.updatedList = this.updatedList.bind(this);
        this.gradeNow = this.gradeNow.bind(this);
        this.saveGrades = this.saveGrades.bind(this);
    }

    // const list = props.menuitems;
    
    // updatedList = this.state.unchecked.map((listItems)=>{
    //     return <li>{listItems}</li>;
    // });

    gradeNow = () => {
        this.setState({grading_one: true});
        this.state.grading_one = true;
    }

    saveGrades = () => {
        this.setState({grading_one: false});
        this.state.grading_one = false;
    }
        
    render() {
        return (
            <div>
                {!this.state.grading_one?
                    <div>
    
                    <ul>{  
                    this.state.unchecked.map((listItems)=>{
                        return (
                            <div>
                                
                                        <li>{listItems}</li>

                                        <Button variant="primary" size="sm" style={{ marginTop: 10, maxWidth: '8em', maxHeight: '3em' }}
                                            onClick={this.gradeNow}
                                            >
                                            Grade Now
                                        </Button>
                            </div>
                        );
                    })
                    }</ul>
                    </div>

                    :

                    <div>

                        <Card border="warning" style={{ minWidth: '80%',  marginLeft: '10%'}}>
                            <Card.Header>{this.state.answers[0]}</Card.Header>
                            <Card.Body>
                            {/* <Card.Title>Warning Card Title</Card.Title> */}
                            <Card.Text>Some quick example text to build on the card title and make up the bulk
                                of the card's content.Some quick example text to build on the card title and make up the bulk
                                of the card's content.Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.Some quick example text to build on the card title and make up the bulk
                                of the card's content.Some quick example text to build on the card title and make up the bulk
                                of the card's content.Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>

                            <ul>{  
                            this.state.rubriks_1.map((listItems)=>{
                                return (
                                    <div>
                                        
                                        <li>
                                            <p>
                                                Title: {listItems.title}
                                                <br />
                                                Marks: {listItems.marks}
                                            </p>
                                        </li>

                                        <label >
                                        Enter Marks: 
                                            <input type="text" name="marks" style={{ marginLeft: "3%", maxWidth: "15%"}} />
                                        </label>
                                    </div>
                                );
                            })
                            }</ul>

                            </Card.Body>
                        </Card>
                        <br />

                        <Button variant="primary" size="sm" style={{ marginTop: 10, maxWidth: '8em', maxHeight: '3em' }}
                            onClick={this.saveGrades}
                            >
                            Save Grades
                        </Button>
                    </div>
                }
  
            </div>
        );
    }
}

export default gradeNew;