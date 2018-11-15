import React, { Component } from 'react';
import map from './images/map.jpg';

export class Map extends Component {
    render() {
        return (
            <div dir={this.props.direction}>
                <h2>{this.props.languageNow.map.title}</h2>
                <img src={map} alt={this.props.languageNow.map.title} />
                <button onClick={() => window.history.back()}>{this.props.languageNow.map.back}</button>
                 <button onClick={() => { this.props.history.push(`/${this.props.languageNow.path}/thismap`) }}>
                        {this.props.languageNow.coverPage.next} >
                        
                        </button>
                 <br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        );
    };
}