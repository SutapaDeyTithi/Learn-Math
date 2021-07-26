import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme, lighten } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/styles'
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { green } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Collapse from "@material-ui/core/Collapse";
import Rating from "@material-ui/lab/Rating";
import Badge from "@material-ui/core/Badge";
import FeedbackOutlinedIcon from "@material-ui/icons/FeedbackOutlined";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import Avatar from "@material-ui/core/Avatar";

// new imports
import "react-dropdown/style.css";
import { feedback_database, suggestion_database, report_database } from "./moddatabase";
import {useStyles} from "./management_util";
import Popup from "./FileDetails";





const headCells = [
  { id: ["", "", ""], numeric: false },
  {
    id: ["Feedback ID", "Suggestion ID", "Report ID"],
    numeric: false,
  },
  { id: ["Timestamp", "Timestamp", "Timestamp"], numeric: false },
  { id: ["User Name", "User Name", "User Name"], numeric: false },
];

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
    console.log(index);
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}


function ContentCheckHead(props) {

    const { value } = props;

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id[value]}
                align="center"
                style={{fontSize:20}}
          >           
              {headCell.id[value]}
            
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}



export default function Management() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  
 
  //
    
    const [open_list, setOpen] = useState(
      Array(feedback_database.length)
        .fill("")
        .map((_, i) => ({
          key: feedback_database[i]._id,
          open_value: false,
        }))
    );

    const [open_list_s, setOpenS] = useState(
      Array(suggestion_database.length)
        .fill("")
        .map((_, i) => ({
          key: suggestion_database[i]._id,
          open_value: false,
        }))
    );

    const [open_list_r, setOpenR] = useState(
      Array(report_database.length)
        .fill("")
        .map((_, i) => ({
          key: report_database[i]._id,
          open_value: false,
        }))
    );

    const handleChange = (event, newValue) => {
        console.log("nv", newValue);
    setValue(newValue);
  };

    const handleChangeIndex = (index) => {
        
    setValue(index);
  };



  const handleClick = (event, r) => {
    const found = feedback_database.find((row) => row === r);
    console.log(found);
      
    const idx = feedback_database.indexOf(found);
    

    let newSelected = found;
      setSelected(newSelected);

    //Popup(found);
    };

    const get_index = (database, r) => {
        //console.log("r, ",r);
        const found = database.find((row) => row === r);
        //console.log(found);

        const idx = database.indexOf(found);
        return idx;
    }
    
    const change_open_value = (c, idx) => {
      let op_list;
      if (c === 0) op_list = [...open_list];
      else if (c === 1) op_list = [...open_list_s];
      else if(c === 2) op_list = [...open_list_r];
      //     let op_list = [...open_list];

      op_list[idx].open_value = !op_list[idx].open_value;

      if (c === 0) setOpen(op_list);
      else if (c === 1) setOpenS(op_list);
      else if(c === 2) setOpenR(op_list);
      //     let op_list = [...open_list];

      
    };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //const isSelected = (name) => selected.indexOf(name) !== -1;

  const isSelected = (row) => {
    return selected === row;
    //return selected.indexOf(name) !== -1;
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, feedback_database.length - page * rowsPerPage);

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

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
          <Tab
            label={
              <span>
                Feedback
                <FeedbackOutlinedIcon />
              </span>
            }
            {...a11yProps(0)}
          />

          <Tab
            label={
              <span>
                Suggestion
                <RateReviewOutlinedIcon />
              </span>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <span>
                Report
                <ReportProblemOutlinedIcon />
              </span>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className={classes.root1}>
            <Paper className={classes.paper}>
              <TableContainer>
                <Table
                  className={classes.table}
                  aria-labelledby="tableTitle"
                  aria-label="enhanced table"
                >
                  <ContentCheckHead value={value} />
                  <TableBody>
                    {feedback_database
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        const isItemSelected = isSelected(row);
                        const labelId = `enhanced-table-checkbox-${index}`;
                        const idx = get_index(feedback_database, row);

                        return (
                          <React.Fragment>
                            <TableRow
                              hover
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              key={row._id}
                              selected={isItemSelected}
                              onClick={() => {
                                if (value === 0) {
                                  console.log("f");
                                  change_open_value(value, idx);
                                }
                              }}
                            >
                              <TableCell>
                                <IconButton
                                  aria-label="expand row"
                                  size="small"
                                >
                                  {open_list[idx].open_value ? (
                                    <KeyboardArrowUpIcon />
                                  ) : (
                                    <KeyboardArrowDownIcon />
                                  )}
                                </IconButton>
                              </TableCell>
                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="10"
                                align="center"
                                style={{ fontSize: 20 }}
                              >
                                {row._id}
                              </TableCell>
                              <TableCell
                                align="center"
                                style={{ fontSize: 20 }}
                              >
                                {row.timestamp}
                              </TableCell>
                              <TableCell
                                align="center"
                                style={{ fontSize: 20 }}
                              >
                                {row.user_name}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell
                                style={{ paddingBottom: 0, paddingTop: 0 }}
                                colSpan={6}
                              >
                                <Collapse
                                  in={open_list[idx].open_value}
                                  timeout="auto"
                                  unmountOnExit
                                >
                                  <Avatar
                                    aria-label="recipe"
                                    style={{
                                      backgroundColor: "#99ff66",
                                      marginTop: 5,
                                    }}
                                  >
                                    {row.user_name.charAt(0)}
                                  </Avatar>
                                  <Box margin={1}>
                                    <Box
                                      component="fieldset"
                                      mb={3}
                                      borderColor="transparent"
                                    >
                                      <Rating
                                        name="half-rating-read"
                                        defaultValue={row.star}
                                        precision={0.5}
                                        readOnly
                                      />
                                    </Box>
                                    <Typography
                                      variant="h9"
                                      gutterBottom
                                      component="div"
                                    >
                                      {row.text}
                                    </Typography>
                                  </Box>
                                </Collapse>
                              </TableCell>
                            </TableRow>
                          </React.Fragment>
                        );
                      })}
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[8, 12, 16]}
                component="div"
                count={feedback_database.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <div className={classes.root1}>
            <Paper className={classes.paper}>
              <TableContainer>
                <Table
                  className={classes.table}
                  aria-labelledby="tableTitle"
                  aria-label="enhanced table"
                >
                  <ContentCheckHead value={value} />
                  <TableBody>
                    {suggestion_database
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        const isItemSelected = isSelected(row);
                        const labelId = `enhanced-table-checkbox-${index}`;
                        const idx = get_index(suggestion_database, row);

                        return (
                          <React.Fragment>
                            <TableRow
                              hover
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              key={row._id}
                              selected={isItemSelected}
                              onClick={() => {
                                if (value === 1) {
                                  console.log("s");
                                  change_open_value(value, idx);
                                }
                              }}
                            >
                              <TableCell>
                                <IconButton
                                  aria-label="expand row"
                                  size="small"
                                >
                                  {open_list_s[idx].open_value ? (
                                    <KeyboardArrowUpIcon />
                                  ) : (
                                    <KeyboardArrowDownIcon />
                                  )}
                                </IconButton>
                              </TableCell>
                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="10"
                                align="center"
                                style={{ fontSize: 20 }}
                              >
                                {row._id}
                              </TableCell>
                              <TableCell
                                align="center"
                                style={{ fontSize: 20 }}
                              >
                                {row.timestamp}
                              </TableCell>
                              <TableCell
                                align="center"
                                style={{ fontSize: 20 }}
                              >
                                {row.user_name}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell
                                style={{ paddingBottom: 0, paddingTop: 0 }}
                                colSpan={6}
                              >
                                <Collapse
                                  in={open_list_s[idx].open_value}
                                  timeout="auto"
                                  unmountOnExit
                                >
                                  <Avatar
                                    aria-label="recipe"
                                    style={{
                                      backgroundColor: "#99ff66",
                                      marginTop: 5,
                                    }}
                                  >
                                    {row.user_name.charAt(0)}
                                  </Avatar>
                                  <Box margin={1}>
                                    <Typography
                                      variant="h9"
                                      gutterBottom
                                      component="div"
                                    >
                                      {row.text}
                                    </Typography>
                                  </Box>
                                </Collapse>
                              </TableCell>
                            </TableRow>
                          </React.Fragment>
                        );
                      })}
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[8, 12, 16]}
                component="div"
                count={feedback_database.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
          <div className={classes.root1}>
            <Paper className={classes.paper}>
              <TableContainer>
                <Table
                  className={classes.table}
                  aria-labelledby="tableTitle"
                  aria-label="enhanced table"
                >
                  <ContentCheckHead value={value} />
                  <TableBody>
                    {report_database
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        const isItemSelected = isSelected(row);
                        const labelId = `enhanced-table-checkbox-${index}`;
                        const idx = get_index(report_database, row);

                        return (
                          <React.Fragment>
                            <TableRow
                              hover
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              key={row._id}
                              selected={isItemSelected}
                              onClick={() => {
                                if (value === 2) {
                                  console.log("s");
                                  change_open_value(value, idx);
                                }
                              }}
                            >
                              <TableCell>
                                <IconButton
                                  aria-label="expand row"
                                  size="small"
                                >
                                  {open_list_r[idx].open_value ? (
                                    <KeyboardArrowUpIcon />
                                  ) : (
                                    <KeyboardArrowDownIcon />
                                  )}
                                </IconButton>
                              </TableCell>
                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="10"
                                align="center"
                                style={{ fontSize: 20 }}
                              >
                                {row._id}
                              </TableCell>
                              <TableCell
                                align="center"
                                style={{ fontSize: 20 }}
                              >
                                {row.timestamp}
                              </TableCell>
                              <TableCell
                                align="center"
                                style={{ fontSize: 20 }}
                              >
                                {row.user_name}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell
                                style={{ paddingBottom: 0, paddingTop: 0 }}
                                colSpan={6}
                              >
                                <Collapse
                                  in={open_list_r[idx].open_value}
                                  timeout="auto"
                                  unmountOnExit
                                >
                                  <Avatar
                                    aria-label="recipe"
                                    style={{
                                      backgroundColor: "#99ff66",
                                      marginTop: 5,
                                    }}
                                  >
                                    {row.user_name.charAt(0)}
                                  </Avatar>
                                  <Box margin={1}>
                                    <Typography
                                      variant="h9"
                                      gutterBottom
                                      component="div"
                                    >
                                      {row.text}
                                    </Typography>
                                  </Box>
                                </Collapse>
                              </TableCell>
                            </TableRow>
                          </React.Fragment>
                        );
                      })}
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[8, 12, 16]}
                component="div"
                count={feedback_database.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
