import React, { Component } from 'react';
import { useStyles } from "./management_util";
import { ContentCheckHead } from "./management_util";
import {feedback_database} from "./moddatabase";

export default function Feedback(props)
{
    const [open, setOpen] = React.useState(0);
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(8);
    const [selected, setSelected] = React.useState();

    const { value } = props;


    const headCells = [
      { id: ["", "", ""], numeric: false },
      {
        id: "Feedback ID",
        numeric: false,
      },
      { id: "Timestamp", numeric: false },
      { id: "User Name", numeric: false },
    ];


    return(
    <div className={classes.root1}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <ContentCheckHead value={value} headCells={headCells} />
            <TableBody>
              {feedback_database
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
    </div>);
}