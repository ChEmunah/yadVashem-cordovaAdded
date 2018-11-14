import React, { Component } from 'react';

export class Weather extends Component {
    render(){
      let tempC = `${this.props.tempC}°C`;
      let tempF = `${this.props.tempF}°F`;
        return(
          <div className = 'weather'>
          <span>&nbsp;&nbsp;&nbsp; </span>
          <span>&nbsp;&nbsp;&nbsp; </span>
        <div id="tempC">{tempC}</div>
        <span>&nbsp;&nbsp;&nbsp; </span>
        <div id="tempF">{tempF}</div>
        <span>&nbsp;&nbsp;&nbsp; </span>        
        </div>
        )
    }
}

