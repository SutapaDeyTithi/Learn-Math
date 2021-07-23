import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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

function createData(id, name, Rating) {
    return { id, name, Rating };
}

const rows = [
    createData(1, 'Jamal', 1700),
    createData(2, 'Kamal', 1695),
    createData(3, 'Mahira', 1680),
    createData(4, 'Rahim', 1500),

];

const useStyles = makeStyles({
    table: {
        minWidth: 280,
        maxWidth: 280
    },
    shadows: ["none"]
});

export default function CustomizedTables() {
    // const classes = useStyles();

    return (
        
 <table className="table table-striped" style={{width:335,borderWidth:"1px", borderColor:"#aaaaaa", borderStyle:'solid',}}>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Rating</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>1700</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>1600</td>
      
    </tr>
    <tr>
      <td>3</td>
      <td >Larry </td>
      <td>1500</td>
    </tr>
  </tbody>
</table>


    );
}