
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      maxWidth: '80vh',
      minWidth: '60vh',
      // marginLeft: '2vh'
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
    }

    if(props.type == 'text') {
      console.log("Text --> ", event.target.value);
      props.setText(event.target.value)
    }

    if(props.type == 'WrittenQues') {
      console.log("Written", props.fieldType, "--->", event.target.value);
      props.setWrittenQues(event.target.value, props.writtenQuesNo, props.fieldType)
    }

    if(props.type == 'rubrik') {
      console.log("rubrik", props.fieldType, "--->", event.target.value);
      props.setRubrik(event.target.value, props.rubrikNo, props.fieldType, props.quesNo)
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete="off" align='left'>
      <div>
        <TextField
          label={props.label}
          multiline
          // fullWidth
          // rowsMax={rowMax.rowMax}
          value={state.title}
          onChange={handleChange}
          variant="outlined"
          inputProps={{
            name: 'title',
            id: "outlined-multiline-flexible",
          }}
          // style={{minWidth: '10vh'}}
        />
      </div>
    </form>
  );
}
