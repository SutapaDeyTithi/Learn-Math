import React, { Component } from "react";
import friend from "../Resources/Images/Friend.PNG";
class q extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (
            <div>
                <h3 >Question {this.props.question_no}</h3>
                {this.props.question.map(filteredName => (
                    <p style={{ paddingTop: 20 }}>{filteredName.questext}
                        <img src={friend} />
                        {/* <calc/> */}
                        <br></br>
                        
                    </p>

                ))
                }
            </div>
        )
    }
}
export default q;