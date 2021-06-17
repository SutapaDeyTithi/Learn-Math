import React,{Component} from "react";
class option extends Component{
    constructor(props) {
        super(props);
    }
    onTrigger = (event) => {
        this.props.parentCallback(event.target.value);
        // event.preventDefault();
    }
    
    render(){
        return(
            <div>
                <h3 >Options </h3>
                            {this.props.question.map(filteredName => (
                                <li style={{listStyleType:"none"}}>

                                    <input type="radio" style={{marginRight:10}} name="platform" value={filteredName.options[0]}
                                   onChange={this.onTrigger}/>
                                    {filteredName.options[0]}
                                </li>


                            ))
                            }
                            
                            {this.props.question.map(filteredName => (
                                <li style={{listStyleType:"none"}}>

                                    <input type="radio" style={{marginRight:10}} name="platform" value={filteredName.options[1]}
                                    onChange={this.onTrigger}/>
                                    {filteredName.options[1]}
                                </li>


                            ))
                            }
                            {this.props.question.map(filteredName => (
                                 <li style={{listStyleType:"none"}}>

                                    <input type="radio" style={{marginRight:10}} name="platform" value={filteredName.options[2]}
                                    onChange={this.onTrigger}/>
                                    {filteredName.options[2]}
                                </li>


                            ))
                            }
                            {this.props.question.map(filteredName => (
                                 <li style={{listStyleType:"none"}}>

                                    <input type="radio" style={{marginRight:10}}  name="platform" value={filteredName.options[3]}
                                    onChange={this.onTrigger}/>
                                    {filteredName.options[3]}
                                </li>


                            ))
                            }
            </div>
        )
    }
}
export default option;