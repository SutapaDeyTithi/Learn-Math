import React, { Component ,useState} from "react";

import './topic.css';
import algebra from "../Resources/Images/al.PNG";
import popular from "../Resources/Images/popular.png";
import number from "../Resources/Images/number 1.png";
import geo from "../Resources/Images/geou 1.png";
import logic from "../Resources/Images/logic 1.png";
import graph from "../Resources/Images/Cycle_graph_C5 1.png";
import { Col } from "reactstrap";
class topic extends Component {
    
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.topic=0
        this.clicked_topic=-1
        this.clicked_subtopic=-1
        this.subtopic=0
        this.state = {
          count: 0,
          data: []
        };
        
      }
      handleChange = e => {
        this.setState({topic: e.target.value});
        console.log(this.topic);
        this.setState({clicked_topic:this.clicked_topic+1});
        fetch("http://localhost:5000/topic")
          .then(res => res.json())
          .then(json => this.setState({ data: json }));
        
      };
      handleChange_sub = e => {
        this.setState({subtopic: e.target.value});
        
        this.setState({clicked_subtopic:this.clicked_subtopic+1});
        // fetch("http://localhost:5000/topic")
        //   .then(res => res.json())
        //   .then(json => this.setState({ data: json }));
        
      };
    //   componentDidMount() {
        
    //   }

      
      
      
      render() {
        
    

        return (
            
            <section id="topic">
                <div className="row">
                    
                <div className="col-md-9 left">
                    <div className="popular">
                        <h3>Popular <img  className="logop" src={popular} /></h3>
                        
           
                    </div>
                    <div className="row">
                        <div className="card first" >
                                
                                <img className="algeb" src={algebra}/>
                                <div className="card-body">
                                    <p className="card-text">Algebra</p>
                                </div>
                        </div>
                        <div className="card" >
                        
                            <img className="number" src={number}/>
                            <div className="card-body">
                                <p className="card-text">Number Theory</p>
                            </div>
                        </div>
                        <div className="card" >
                        
                            <img className=" geo" src={geo}/>
                            <div className="card-body">
                                <p className="card-text">Geometry</p>
                            </div>
                        </div>
                        <div className="card" >
                        
                            <img className="number" src={number}/>
                            <div className="card-body">
                                <p className="card-text">Number Theory</p>
                            </div>
                        </div>

                        
                    </div>
                    <div>
                        {this.state.count==0
                            ? (<div class="col-md-8 text-center ">
                                <button className="see_more" onClick={() => this.setState({ count: this.state.count + 1 })}>Show More</button>
                                </div>)
                            : (
                                <div className="row">
                                
                                    <div className="card first" >
                                    
                                        <img className="card-img-top" src={algebra}/>
                                        <div className="card-body">
                                            <p className="card-text">Algebra</p>
                                        </div>
                                    </div>
                                
                                
                                    <div className="card" >
                                    
                                        <img className="card-img-top" src={algebra}/>
                                        <div className="card-body">
                                            <p className="card-text">Graph</p>
                                        </div>
                                    </div>
                               
                                
                                    <div className="card" >
                                    
                                        <img className="card-img-top" src={algebra}/>
                                        <div className="card-body">
                                            <p className="card-text">Brain Teaser</p>
                                        </div>
                                    </div>
                                
                                
                                    <div className="card" >
                                    
                                        <img className="card-img-top" src={algebra}/>
                                        <div className="card-body">
                                            <p className="card-text">Number theory</p>
                                        </div>
                                    </div>
                                </div>
                            
                            
                                

                            )
                        }
                    </div>
                </div>
                
                
                       
                   
                

                <div className="col-md-3 right">
                    
                     <input type="text" className="search" value="Search Topic" />
                     <div className="simple">Most Popular</div>
                     <div className="simple">Topic</div>
                    <div className="simplee">
                     <div className="radio-buttons">
                        <input
                            className="check"
                            value="Algebra"
                            name="platform"
                            type="radio"
                            onChange={this.handleChange}
                        />Algebra<br></br>
                        
                        <input
                           className="check"
                            value="Number Theory"
                            name="platform"
                            type="radio"
                            onChange={this.handleChange}
                        />Number Theory<br></br>
                        
                        <input
                            className="check"
                            value="Geometry"
                            name="platform"
                            type="radio"
                            onChange={this.handleChange}
                            
                        
                        />Geometry<br></br>
                        <input
                            className="check"
                            value="Trigonometry"
                            name="platform"
                            type="radio"
                            onChange={this.handleChange}
                            
                        
                        />Trigonometry<br></br>
                        <input
                            className="check"
                            value="Statistics"
                            name="platform"
                            type="radio"
                            onChange={this.handleChange}
                            
                        
                        />Statistics<br></br>
                        <input
                            className="check"
                            value="Time"
                            name="platform"
                            type="radio"
                            onChange={this.handleChange}
                            
                        
                        />Time<br></br>
                        </div>
                        <h1>{this.state.topic}</h1>
                        </div>
                        {/* <div>
                        <ul>
                        {this.state.data.map(el => {
                            <li>{el.topicname}</li>
                            // { el.topicname===this.state.option
                                
                            //  ?(<li>{el.subtopic_name}</li>)
                            // :(<h1></h1>)
                            // }
                            {this.state.option===el.topicName ? 
                                (<li>{el.subtopic_name}</li>) 
                                : (<h1>hejsan</h1>) 
                            }
                            
                            
                            
      })}
                            
                        </ul>
                        </div> */}
                        <div>
                            {this.state.clicked_topic>=0
                            ?(
                                
                                <div>
                            
                            <div className="simple">Subtopic</div> 
                            <div className="simplee radio-buttons">
                            {this.state.data.filter(el =>el.topicname == this.state.topic).map(filteredName => (
                                <li className="none">
                            <input type="radio" className="check" name="platform" value={filteredName.subtopic_name}
                            onChange={this.handleChange_sub}/>
                            {filteredName.subtopic_name}
                            </li>
                            
                            ))
                            }
                            </div>

                            

                            </div>
                            )
                            :(<h1></h1>)
                            }
                        
                            
                        </div>
                        <h1>{this.state.subtopic}</h1>
                     
                        
                     </div>
                    
                   
                     </div>
                                    
                
               
                
            
            
                    
                    
                    
                    
           
            
            
            
            
        </section>
           
              
        );
    }
}



export default topic;
