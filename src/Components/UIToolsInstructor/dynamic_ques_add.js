
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';

import './Dynamicaddques.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

// new imports
import ImageUp from "./imageUp";
import Textfield from "./textField";
import Dropdown from 'react-dropdown';
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

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

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

export default function FloatingActionButtonZoom() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [inputList, setInputList] = useState([{ question: "", answer: "" }]);

    // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { question: "", answer: "" }]);
  };

  // dropdown   
  const options = [
    'Written', 'MCQ', 'Fill in the Blank', 'True/False', "Drag & Drop"
  ];

  // const defaultOption = options[0];
  // rubrik
  // const [rubrik, ]

  return (
    <div>
      
      <div >
      {inputList.map((x, i) => {
        return (
          <div className="box" style={{ marginTop: 20 }}>
            {/* onChange={this._onSelect} */}
            {/* value={defaultOption} */}
            <div className="dropdown">
            <Dropdown options={options}  placeholder="Question Type"/>
            </div>
            {/* <input
            name="question"
  	        placeholder="Enter Question Text"
            value={x.question}
            onChange={e => handleInputChange(e, i)}
            style={{ marginTop: 10 }}
            /> */}
            <br></br>
            <Textfield label="Enter Question Text" />
            <ImageUp />
            <br/>
            {/* <input
              className="ml10"
              name="answer"
              placeholder="Enter Answer Text"
              value={x.answer}
              onChange={e => handleInputChange(e, i)}
              style={{ marginTop: 10 }}
            /> */}
            <Textfield label="Enter Answer Text" />
            <ImageUp />

           

            <div className="btn-box" style={{ marginTop: 10 }}>
              <Button variant="secondary" size="lg" style={{ marginLeft: 20 }}>
                Rubrik
              </Button>

              <br></br>

              {inputList.length !== 1 &&
               <Button variant="secondary" size="lg" style={{ marginLeft: 20, marginTop: 10 }}
                  onClick={() => handleRemoveClick(i)}>
                    Remove
                </Button>
              }
              {inputList.length - 1 === i &&
               <Button variant="secondary" size="lg" 
                  onClick={handleAddClick} style={{ marginLeft: 20, marginTop: 10 }}>
                    Add
              </Button>
              }
            </div>
          </div>
        );
      })}
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
    </div>

    <br></br> 
    <Link to="/createExam" className="btn btn-primary" style={{marginLeft: '85%'}}>Save Outline</Link>
    <br></br> 
     
    </div>
  );
}
