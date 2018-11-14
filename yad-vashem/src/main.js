import React, { Component } from 'react';
import { CoverPage } from './coverPage';
import { languages } from './languages';
import { BodyWrapper } from "./BodyWrapper";
import { Switch, Route } from 'react-router-dom';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languageNow: languages.Hebrew,
            direction: "rtl",
            tempC: 0,
            tempF: 0
        }
        this.turnEnglish = this.turnEnglish.bind(this);
        this.turnHebrew = this.turnHebrew.bind(this);
        this.getWeather = this.getWeather.bind(this);
        this.setWeather = this.setWeather.bind(this);
    }
    
    turnEnglish() {
        this.setState({ languageNow: languages.English });
        this.setState({ direction: "ltr" });
    }
    turnHebrew() {
        this.setState({ languageNow: languages.Hebrew });
        this.setState({ direction: "rtl" });
    }
    getWeather(){
        let city = "Jerusalem";
        let searchtextC = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'";
        const urlC = "https://query.yahooapis.com/v1/public/yql?q=" + searchtextC + "&format=json";
        fetch(urlC).then(response=> response.json())
        .then(json => this.setWeather(json,true))
        .catch(error=>console.log("error",error)) 

        let searchtextF = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "')";
        const urlF = "https://query.yahooapis.com/v1/public/yql?q=" + searchtextF + "&format=json";
        fetch(urlF).then(response=> response.json())
        .then(json => this.setWeather(json,false))
        .catch(error=>console.log("error",error)) 
    }
    setWeather = (json,isCelsius)=> {
        if (isCelsius) this.setState({tempC : json.query.results.channel.item.condition.temp});
        else           this.setState({tempF : json.query.results.channel.item.condition.temp});
    }
    render() {
        return (
            <Switch>
                <Route exact path="/"
                    render={(props) =>
                        <CoverPage {...props}
                            // passes props to coverPage: what language is chosen, the direction of text, the functions for changing the state in main to a different language
                            languageNow={this.state.languageNow}
                            direction={this.state.direction}
                            turnEnglish={this.turnEnglish}
                            turnHebrew={this.turnHebrew}
                            getWeather = {this.getWeather} />
                    } />
                <Route path={`/${this.state.languageNow.path}`}
                    render={(props) =>
                        <BodyWrapper {...props}
                            languageNow={this.state.languageNow}
                            direction={this.state.direction}
                            tempC = {this.state.tempC}
                            tempF = {this.state.tempF} />
                    } />
            </Switch>
        )
    }
}
 



