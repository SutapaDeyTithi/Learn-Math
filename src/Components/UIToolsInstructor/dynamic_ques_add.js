import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';

import './Dynamicaddques.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

import ImageUp from "./imageUploadGeeks";
import Textfield from "./textField";
import 'react-dropdown/style.css';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '96%',
    position: 'relative',
    minHeight: '90vh',
    marginLeft: "2%",
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));

export default function FloatingActionButtonZoom(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  // rubrik
  const [rubrikQuesNo, setRubrikQuesNo] = React.useState(0);
  const [rubrikList, setRubrikList] = useState([
    {
      quesNo: "", 
      rubrik: [{ breakpoint: "", marks: ""}]
    }
  ]);

  const handleChangeRubrikQuesNo = (index) => {
    setRubrikQuesNo(index);
    console.log("Setting rubrik for ques no: ", index);

    // set ques no
    // const list = [...rubrikList];
    // list[index][type] = e;
    // setRubrikList(list);
    // console.log(rubrikList);
  };

  const [rubrik, setRubrik] = React.useState(false);

  const OpenRubrik = (quesNo) => {
    setRubrik(true);
    handleChangeRubrikQuesNo(quesNo);
    console.log("Rubrik: ", rubrikList[rubrikQuesNo]["rubrik"]);
  }

  const CloaseRubrik = () => {
    setRubrik(false);
    // console.log("Rubrik: ", rubrik);
  }

 

  // handle input change
  const handleRubrikChange = (e, index, type, quesNo) => {
    const list = [...rubrikList];
   if(list[quesNo]["rubrik"][index] == null )
   list[quesNo]["rubrik"].push({ breakpoint: "", marks: ""});
    list[quesNo]["rubrik"][index][type] = e;
    setRubrikList(list);
    console.log("rubrik list --> ", rubrikList);
  };

   // handle click event of the Remove button
   const handleRemoveClick_rubrik = index => {
    const list = [...rubrikList];
    // list.splice(index, 1);
    list[rubrikQuesNo]["rubrik"].splice(index, 1);
    setRubrikList(list);
  };
  
  // handle click event of the Add button
  const handleAddClick_rubrik = () => {
    console.log("Rubrik before: ", rubrikList[rubrikQuesNo]["rubrik"]);
    // setRubrikList([...rubrikList[rubrikQuesNo]["rubrik"][i], { breakpoint: "", marks: ""}]);
    const list = [...rubrikList];
    list[rubrikQuesNo]["rubrik"].push({ breakpoint: "", marks: ""});
    console.log("Rubrik after: ", rubrikList[rubrikQuesNo]["rubrik"]);
    setRubrikList(list);
  };

  const submitRubrik = () => {
      CloaseRubrik();
  }




  // ques & ans
  const [inputList, setInputList] = useState([{question: "", answer: "", index: ""}]);

  const handleInputChange = (e, index, type) => {
    const list = [...inputList];
    list[index][type] = e;
    list[index]["index"] = index;

    setInputList(list);
    console.log("ques list --> ", inputList);
  };
  
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { question: "", answer: "", index: "" }]);
  };


  
    

  if(rubrik == true) {
  return(
    <div>
    <br></br> <br></br>
    {rubrikList[rubrikQuesNo]["rubrik"].map((x, i) => {
    return (
      <form className="box">
        <label >
        {/* {console.log("rubrik x -> ", x)} */}
          <Textfield label="Enter Rubrik Breakpoint" rubrikNo={i} setRubrik={handleRubrikChange} type='rubrik' fieldType='breakpoint' quesNo={rubrikQuesNo}/>
        </label>

        <label >
          <Textfield label="Enter Marks" rubrikNo={i} setRubrik={handleRubrikChange} type='rubrik' fieldType='marks' quesNo={rubrikQuesNo}/>
        </label>


        {rubrikList[rubrikQuesNo]["rubrik"].length !== 1 &&
            <Button variant="primary" size="sm" 
            style={{ 
              marginTop: 10, maxWidth: '5em', maxHeight: '3em', 
              marginLeft: "50%" 
            }}
              onClick={() => handleRemoveClick_rubrik(i)}>
                  Remove
            </Button>
        }


        {rubrikList[rubrikQuesNo]["rubrik"].length - 1 === i &&
            <Button variant="primary" size="sm" 
                onClick={handleAddClick_rubrik} 
                style={{ 
                marginTop: 10, maxWidth: '5em', maxHeight: '3em', 
                marginLeft: "50%" }}>
                  Add
            </Button>
        }
      
      </form>
    );
    })}
   
    <Button variant="primary" size="sm"  
    style={{ 
          marginTop: 30, maxWidth: '8em', maxHeight: '3em', 
          marginLeft: "10%" 
        }} 
          onClick={submitRubrik}>
          Save Rubrik
    </Button>
    </div>
  ) 
}
else {
  return(
  <div>
    <div >
    {inputList.map((x, i) => {
      return (
        <div className="box" style={{ marginTop: 20 }}>
        

          <br></br>
          <Textfield label="Enter Question Text" writtenQuesNo={i} setWrittenQues={handleInputChange} type='WrittenQues' fieldType='question'/>
          <ImageUp />
          <br/>
         
          <Textfield label="Enter Answer Text"  writtenQuesNo={i} setWrittenQues={handleInputChange} type='WrittenQues' fieldType='answer'/>
          <ImageUp />
          {/* https://www.geeksforgeeks.org/file-uploading-in-react-js/ */}

        {/* {console.log("ques x --> ", x)} */}

          <div className="btn-box" style={{ marginTop: 10 }}>
            <Button variant="primary" size="sm" style={{ marginLeft: 20, marginTop: 10, maxWidth: '5em', maxHeight: '3em' }}
             onClick={() => OpenRubrik(x.index)}>
              Rubrik
            </Button>

            <br></br>

            {inputList.length !== 1 &&
            <Button variant="primary" size="sm" style={{ marginLeft: 20, marginTop: 10, maxWidth: '5em', maxHeight: '3em' }}
                onClick={() => handleRemoveClick(i)}>
                  Remove
              </Button>
            }
            {inputList.length - 1 === i &&
            <Button variant="primary" size="sm" style={{ marginLeft: 20, marginTop: 10, maxWidth: '5em', maxHeight: '3em' }}
                onClick={handleAddClick} >
                  Add
            </Button>
            }
          </div>
        </div>
      );
    })}

  </div>
    

  <br></br> 
  <Link to="/examCorner" className="btn btn-primary" style={{marginLeft: '85%'}} onClick={props.setSaved}>Save Outline</Link>
  <br></br> 
    
  </div>   
  );
 }
}
