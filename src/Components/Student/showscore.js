import React,{useState} from 'react';
import Rank from "../../Resources/Images/image 92.png";
import level from "../../Resources/Images/image 93.png";
import Table_Rating from "./table_rating";
import axios from 'axios';
class score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 3,
            rank:1400,
            user_array:[],
            single_array:[]

        };
    };
    componentDidMount() {
        // console.log(this.props.uid);
        // fetch("http://localhost:5000/all_user")
        //     .then(res => res.json())
        //     .then((result) => {
        //     //console.log(result);
        //     this.setState({
        //         user_array: result,
        //         // mcq_options: result.options
        //     })
        // });
        
        fetch("http://localhost:5000/all_user")
            .then(res => res.json())
            .then(json => this.setState({ user_array: json }));
        
        const selectedItems = this.state.user_array.filter(d => d.user_id===this.props.uid);
        this.setState({single_array:selectedItems});
        
        
        if(this.props.ans>=2){
            //console.log("hello")

        const Question = {
            user_id: this.props.uid,
            level: 4,
            rank:1000
          };
          axios.post('http://localhost:5000/rating_change', Question)
          .then(res => {
              console.log(res);
              console.log(res.data);
    
             
              // Question = this.state.exam_paper;
              // console.log("Question cleared? ", Question);
          })
        }
        fetch("http://localhost:5000/all_user")
            .then(res => res.json())
            .then(json => this.setState({ user_array: json }));
        
        
        

    }
    render() {
        // const [state, setState] = useState(this.state.user_array.filter((person) => person.user_id === this.props.uid));
        return (
            <div className="row">
                {/* <h5 style={{marginTop:100}}>{this.state.single_array.user_id}</h5> */}
                
                    
                
                <div className="card col-md-4" style={{ marginTop: 150, textAlign: "center", marginLeft: 200, width: 400, height: 200, borderStyle: "outset", borderColor: "green" }}>
                    <h5 style={{ paddingTop: 30, color: "black" }}>You just completed the test</h5>
                    {
                        // this.props.ans >= 2 ? (<h5 style={{ paddingTop: 10, color: "black" }}>Your level is upgraded to level {this.state.count + 1}</h5>)
                        //     : (<h5 style={{ paddingTop: 10, color: "black" }}>Your current level is {this.state.count}</h5>)
                        this.state.user_array.filter(el => el.user_id == this.props.uid).map(filteredName => (
                            <h5 style={{ paddingTop: 10, color: "black" }}>Your current level is {filteredName.level}</h5> 
                        ))
                    }
                    <h6 style={{ paddingTop: 10 }}>Total Score: {this.props.ans} / {this.props.ques}</h6>
                </div>
                <div className="card col-md-3" style={{ marginTop: 100, textAlign: "left", marginLeft: 200, width: 40, height: 120, borderStyle: "outset", borderColor: "green" }}>
                    
                    {
                        // this.props.ans >=this.props.ques/2 ?
                        // (<h5><img src={Rank} style={{ width: 40, marginBottom: 20, marginRight: 10 }} />Current level : 4</h5>)
                        // :(<h5><img src={Rank} style={{ width: 40, marginBottom: 20, marginRight: 10 }} />Current level : 3</h5>)
                        this.state.user_array.filter(el => el.user_id == this.props.uid).map(filteredName => (
                            <h5><img src={Rank} style={{ width: 40, marginBottom: 20, marginRight: 10 }}/>Current level is {filteredName.level}</h5> 
                        ))
                    }
                    {/* Current level : {this.state.count} */}
                   
                    {
                        // this.props.ans >=this.props.ques/2 ?
                        // (<h5><img src={Rank} style={{ width: 40, marginBottom: 10}} />Current rank : 1000</h5>)
                        // :(<h5><img src={Rank} style={{ width: 40, marginBottom: 10}} />Current rank : 1400</h5>)
                        this.state.user_array.filter(el => el.user_id == this.props.uid).map(filteredName => (
                            <h5><img src={Rank} style={{ width: 40, marginBottom: 10}} />Current rank is {filteredName.rank}</h5> 
                        ))
                    }
                    {/* <h5><img src={level} style={{ width: 40, marginRight: 10 }} />Current rank : {this.state.rank}</h5> */}
                </div>
                <div className="col-md-3" style={{ marginTop: 0, textAlign: "left", marginLeft: 900, width: 20, height: 220 }}>
                    <h5 style={{ backgroundColor: "#49675B", textAlign: "center", color: 'white', height: 30, marginBottom: 0 }}>Top Rated</h5>
                    <Table_Rating />
                </div>
            </div>
        );
    }
}
export default score;