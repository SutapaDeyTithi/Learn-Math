import React, { useState } from 'react';
import AlarmOnSharpIcon from '@material-ui/icons/AlarmOnSharp';
class Example extends React.Component {
    constructor() {
      super();
      this.state = { time: {}, seconds: 60 };
      this.timer = 0;
      this.startTimer = this.startTimer.bind(this);
      this.countDown = this.countDown.bind(this);
    }
  
    secondsToTime(secs){
      let hours = Math.floor(secs / (60 * 60));
  
      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);
  
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
  
      let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
      };
      return obj;
    }
  
    componentDidMount() {
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
      if (this.timer == 0 && this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000);
      }
    }
  
    startTimer() {
     
    }
  
    countDown() {
      // Remove one second, set state so a re-render happens.
      let seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
      
      // Check if we're at zero.
      if (seconds == 0) { 
        clearInterval(this.timer);
      }
    }
  
    render() {
      return(
        <div style={{borderColor:"#4f4f50",borderStyle:"solid",width:100,height:60,marginLeft:110,borderRadius:10,marginBottom:20}}>
          {/* <button onClick={this.startTimer}>Start</button> */}
          < AlarmOnSharpIcon style={{color:"#4f4f50"}}/>
          <br></br>
          m: {this.state.time.m} s: {this.state.time.s}
        </div>
      );
    }
  }
  export default Example;