import React, { Component } from 'react';

export class Weather extends Component {

  constructor(props){
    super(props);
    this.state = {
      tempC: 0,
      tempF: 0
    }
  }
  

    // setWeather = (json,isCelsius)=> {
    //     if (isCelsius) this.setState({tempC : json.query.results.channel.item.condition.temp});
    //     else           this.setState({tempF : json.query.results.channel.item.condition.temp});
    // }
    // componentDidMount(){
    //     let city = "Jerusalem";
    //     let searchtextC = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'";
    //     const urlC = "https://query.yahooapis.com/v1/public/yql?q=" + searchtextC + "&format=json";
    //     fetch(urlC).then(response=> response.json())
    //     .then(json => this.setWeather(json,true))
    //     .catch(error=>console.log("error",error)) 

    //     let searchtextF = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "')";
    //     const urlF = "https://query.yahooapis.com/v1/public/yql?q=" + searchtextF + "&format=json";
    //     fetch(urlF).then(response=> response.json())
    //     .then(json => this.setWeather(json,false))
    //     .catch(error=>console.log("error",error)) 
    // }
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

