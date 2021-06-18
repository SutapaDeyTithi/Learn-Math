import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

import './button.css';

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#FF0000',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(5),
  },
}));

export default function IconLabelButtons(label = "") {
  const classes = useStyles();

  return (
    <div align='right' padding-right= '1rem'>
      <Button
        variant="contained"
        color="#ff5722"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        style={{backgroundColor: '#ff8f00', color: '#FFFFFF'}}
      >
        {label.label}
      </Button>
    </div>
  );
}
