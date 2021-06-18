import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects(attribute = '') {
  const classes = useStyles();
  const [state, setState] = React.useState({
    attr: '',
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
    <div align = 'left'>
      {
        state.attr = attribute.attribute
      }
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">{attribute.attribute}</InputLabel>
        <Select
          native
          value={state.attr}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'attr',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>Geometry</option>
          <option value={2}>Algebra</option>
          <option value={3}>Measurement</option>
          
        </Select>
      </FormControl>
    </div>
  );
}
