import React, { Component } from "react";
import idea from "../../Resources/Images/idea.jpg"

class q extends Component {
    constructor(props) {
        super(props);


    }
    render() {
        return (
            <div>
                
                    <img src={idea} className="idea"/>
                    <p style={{ paddingTop: 20 }}>
                        Let's start!!
                        Let's assume the numbers are x and y.<br></br>
                        Given the sum of the numbers is 160.
                        So,we can say that x+y=160.<br></br>
                        Also given one is three times of another. So, we can write
                        x=3y.<br></br>
                        3y+y=160<br></br>
                        y=40<br></br>
                        x=120<br></br>
                        So the numbers are 120 and 40.<br></br>
                        
                       
                        <br></br>
                        
                    </p>

                
                
            </div>
        )
    }
}
export default q;