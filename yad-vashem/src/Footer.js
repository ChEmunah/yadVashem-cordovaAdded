import React, { Component } from 'react';
import iconCoffee from './images/iconCoffee.png'
import iconBathroom from './images/iconBathroom.png'
import iconHomeFooter from './images/iconHomeFooter.png'
import { Weather } from './weather';
import { Link } from 'react-router-dom';

export class Footer extends Component {

    render() {
        return (
            <div dir='ltr' id='footer'>
                <span>&nbsp;&nbsp;&nbsp; </span>
                <Link to="/">
                <img className="footerIcon" src={iconHomeFooter} alt="icon Home" />
               </Link>
                <span>&nbsp;&nbsp;&nbsp; </span>
                <Link to={`/${this.props.languageNow.path}/map`}>
                <img className="footerIcon" src={iconBathroom} alt="icon Bathroom" />
                </Link>
                <span>&nbsp;&nbsp;&nbsp; </span>
                <Link to={`/${this.props.languageNow.path}/map`}>
                <img className="footerIcon" src={iconCoffee} alt="icon Coffee" />
                </Link>
                <Weather 
                    tempC = {this.props.tempC}
                    tempF = {this.props.tempF}
                />

            </div>
        );
    }
}


