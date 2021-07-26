import React, { Component } from 'react';
import { suggestion_database } from './moddatabase';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "96%",
    position: "relative",
    minHeight: "90vh",
    marginLeft: "2%",
    textAlign: "center",
    position: "relative",
    position: "initial",
    padding: 100,
  },
  root1: {
    width: "100%",
    padding: 10,
  },
  container: {
    maxHeight: 440,
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
    cursor: "pointer",
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));



export default function Suggestion() {
    const classes = useStyles();
    const theme = useTheme();
    return (
      <div className={classes.root1}>
        <Paper className={classes.paper}>
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              aria-label="enhanced table"
            >
              <ContentCheckHead />
              <TableBody>
                {feedback_database
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    const idx = get_index(row);

                    return (
                      <React.Fragment>
                        <TableRow
                          hover
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row._id}
                          selected={isItemSelected}
                          onClick={() => {
                            change_open_value(idx);
                          }}
                        >
                          <TableCell>
                            <IconButton aria-label="expand row" size="small">
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
                          <TableCell align="center" style={{ fontSize: 20 }}>
                            {row.timestamp}
                          </TableCell>
                          <TableCell align="center" style={{ fontSize: 20 }}>
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
    );
}