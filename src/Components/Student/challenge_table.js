import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import BootstrapTable from 'react-bootstrap-table-next';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name,time,duration,beforecontest,level,participants) {
    return { name,time,duration,beforecontest,level,participants };
}

const rows = [
    createData('All about circles!!', '26/7/21 - 8.30 PM', 3,6,3,167),
    createData('Playing with factorization!!', '28/7/21 - 8.30 PM', 3,48,4,20),

];

const useStyles = makeStyles({
    table: {
        minWidth: 300,
        maxWidth: 350
    },
    shadows: ["none"]
});

export default function CustomizedTables() {
    // const classes = useStyles();

    return (
        
 <table className="table table-striped" style={{width:335,textAlign:'center',borderWidth:"1px", borderColor:"#aaaaaa", borderStyle:'solid',fontSize:14,marginLeft:50}}>
  <thead>
    <tr>   
      <th>Challenge Name</th>
      <th>Time</th>
      <th>Duration(hrs)</th>
      <th>Before Contest(hrs)</th>
      <th>Level</th>
      <th>Registered</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>All about circles!!</td>
      <td>26/7/21 8.30PM</td>
      <td>3</td>
      <td>6</td>
      <td>3</td>
      <td>167</td>
    </tr>
    <tr>
    <td>Playing with factorization!!</td>
      <td>28/7/21  8.30PM</td>
      <td>2</td>
      <td>48</td>
      <td>4</td>
      <td>10</td>
      
    </tr>
    
  </tbody>
</table>


    );
}