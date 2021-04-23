import React, { Component ,useState} from "react";

import './topic.css';
import algebra from "../Resources/Images/al.PNG";
import popular from "../Resources/Images/popular.png";
import number from "../Resources/Images/number 1.png";
import geo from "../Resources/Images/geou 1.png";
import logic from "../Resources/Images/logic 1.png";
import graph from "../Resources/Images/Cycle_graph_C5 1.png";
class topic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
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
                     
                     <input type="checkbox" className="check"  value="Algebra"/>
                     <label > Algebra</label><br></br>

                     <input type="checkbox" className="check"  value="Geometry"/>
                     <label > Geometry</label><br></br>
                    
                     <input type="checkbox" className="check"  value="Number Theory"/>
                     <label > Number Theory</label><br></br>

                     <input type="checkbox" className="check"  value="Logic"/>
                     <label > Logic</label><br></br>
                    
                     <input type="checkbox" className="check"  value="Statistics"/>
                     <label > Statistics</label><br></br>

                     <input type="checkbox" className="check"  value="Graph Theory"/>
                     <label > Graph Theory</label><br></br>

                     
                   
                     </div>
                                    
                </div>
                </div>
                
            
            
                    
                    
                    
                    
           
            
            
            
            
        </section>
           
              
        );
    }
}



export default topic;
