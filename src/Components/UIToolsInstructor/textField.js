
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '70vh',
      minWidth: '10vh'
    },
  },
}));

export default function MultilineTextFields(props) {
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

    if(props.Ques_type == 'MCQ') {
      if(props.label == "Enter Question") {
        props.setText(event.target.value)
      }
      else if(props.label == "Enter Option 1") {
        props.setoption1(event.target.value)
      }
      else if(props.label == "Enter Option 2") {
        props.setoption2(event.target.value)
      }
      else if(props.label == "Enter Option 3") {
        props.setoption3(event.target.value)
      }
      else if(props.label == "Enter Option 4") {
        props.setoption4(event.target.value)
      }
      else if(props.label == "Enter Explanation") {
        props.setExplanation(event.target.value)
      }
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete="off" align='left'>
      <div>
        <TextField
          label={props.label}
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
          style={{minWidth: '10vh'}}
        />
      </div>
    </form>
  );
}
