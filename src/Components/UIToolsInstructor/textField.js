
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '70vh',
    },
  },
}));

export default function MultilineTextFields(label = "", rowMax = "") {
  // console.log(label.label);
  const classes = useStyles();
  // const [value, setValue] = React.useState('');
  const [state, setState] = React.useState({
    title: '',
    description: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off" align='left'>
      <div>
        <TextField
          label={label.label}
          multiline
          fullWidth
          // rowsMax={rowMax.rowMax}
          value={state.title}
          onChange={handleChange}
          variant="outlined"
          inputProps={{
            name: 'title',
            id: "outlined-multiline-flexible",
          }}
        />
      </div>
    </form>
  );
}
