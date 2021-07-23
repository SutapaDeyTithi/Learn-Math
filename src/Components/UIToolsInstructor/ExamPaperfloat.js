
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

import './ExamPaperFloat.css';
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

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary',
      className: classes.fab,
      icon: <AddIcon />,
      label: 'Add',
    },
    {
      color: 'secondary',
      className: classes.fab,
      icon: <EditIcon />,
      label: 'Edit',
    },
    {
      color: 'inherit',
      className: clsx(classes.fab, classes.fabGreen),
      icon: <UpIcon />,
      label: 'Expand',
    },
  ];

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

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Set Question" {...a11yProps(0)} />
          <Tab label="Set Rubrik" {...a11yProps(1)} />
          <Tab label="View" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >

        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* Item One */}
          <div >
          {/* <h3><a href="https://cluemediator.com">Clue Mediator</a></h3> */}
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
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick} style={{ marginLeft: 20 }}>Add</button>}
            </div>
          </div>
        );
      })}
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
    </div>
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          Rubrik logic will be implemented here.
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Created question will displayed here.
        </TabPanel>
      </SwipeableViews>
      {/* {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
          }}
          unmountOnExit
        >
          <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom> */}
      {/* ))} */}
    </div>
  );
}
