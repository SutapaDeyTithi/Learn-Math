import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import BootstrapTable from 'react-bootstrap-table-next';

// const StyledTableCell = withStyles((theme) => ({
//     head: {
//         backgroundColor: theme.palette.common.white,
//         color: theme.palette.common.black,
//     },
//     body: {
//         fontSize: 14,
//     },
// }))(TableCell);




class past_table extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            contests:[]
        }

    }
    componentDidMount() {
        fetch("http://localhost:5000/prev_contests")
            //console.log(res);
            .then(res => res.json())

            .then(json =>
                this.setState({ contests: json }));


    }
    render(){
        return (
           
                <div>
                <table className="table table-striped" style={{width:335,textAlign:'center',borderWidth:"1px", borderColor:"#aaaaaa", borderStyle:'solid',fontSize:14,marginLeft:50}}>
                 <thead>
                   <tr>   
                     <th>Challenge Name</th>
                     <th>Time</th>
                     <th>Duration(hrs)</th>
                     <th>Creators</th>
                     <th>Level</th>
                     <th>Registered</th>
                     <th>Standings</th>
                     
                   </tr>
                 </thead>
                 {/* <tbody>
                   <tr>
                     <td>All about triangles!!</td>
                     <td>20/7/21 8.30PM</td>
                     <td>3</td>
                     <td>Mark</td>
                     <td>3</td>
                     <td>150</td>
                     <td>7</td>
                   </tr>
                   <tr>
                   <td>Statistics problems!!</td>
                     <td>22/7/21  8.30PM</td>
                     <td>2</td>
                     <td>John</td>
                     <td>4</td>
                     <td>200</td>
                     <td>100</td>
                     
                   </tr>
                   
                 </tbody> */}
                 <tbody>
                 {this.state.contests.map(filteredName => (
                     <tr>
                         <td>{filteredName.contest_name}</td>
                         <td>{filteredName.time}</td>
                         <td>{filteredName.duration}</td>
                         <td>{filteredName.creators}</td>
                         <td>{filteredName.level}</td>
                         <td>{filteredName.registered}</td>
                         <td>{filteredName.standings}</td>
                     </tr>
                 ))
                }
                 </tbody>
               </table>
               </div>
               
        );
    }
    

    
}
export default past_table;