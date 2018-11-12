import React, { Component } from 'react';
import map from './images/map.jpg';

export class Map extends Component {
    render() {
        return (
            <div dir={this.props.direction}>
                <h2>{this.props.languageNow.map.title}</h2>
                <img src={map} alt={this.props.languageNow.map.title} />
                <button onClick={() => window.history.back()}>{this.props.languageNow.map.back}</button>
                 <br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        );
    };
}