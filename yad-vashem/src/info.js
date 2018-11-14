import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Slider } from './Slider';

export class Info extends Component {
    render() {
        return (
            <div dir={this.props.direction} className="overflow">
                <br></br>
                <br></br>
                {/* maps over all places to find the place that equills to the URL n order to display it's information */}
                {Object.keys(this.props.languageNow.locationsList).map((item, i) =>
                (window.location.href.substr(window.location.href.lastIndexOf('/') + 1) === "Entrance" ? 
                this.props.history.push(`/`) : 
                (window.location.href.substr(window.location.href.lastIndexOf('/') + 1) === item &&
                <div className="locationsList-List" key={i}>
                            {/* title */}
                            <b>{this.props.languageNow.locationsList[item].label}</b>
                            <br></br>
                            {/* image */}
                            <Slider/>
                            <div className = "underImage">
                                <br></br>
                                {/* description */}
                                <div className="descripition">
                                {this.props.languageNow.locationsList[item].description}
                                </div>
                                <br></br>   <br></br>
                                {/*button to locations list  */}
                                <button onClick={() => { this.props.history.push(`/${this.props.languageNow.path}/locationsList`) }}>Locations list</button>
                                <br /><br />
                                <audio controls>
                                    <source src={this.props.languageNow.locationsList[item].vocalSrc} type="audio/mpeg" />
                                    Your browser does not support the audio element.
                            </audio>
                                <br />
                            {/* options to next place */}
                            <Link to={`/${this.props.languageNow.path}/goTo/${item}`}>
                                <h2 id="linkToGoTo">{this.props.languageNow.info.goTo}</h2>
                                <br></br> <br></br> 
                            </Link>
                            </div>
                        </div>
                    )
                    )
                    )}
            </div>
            )
    }
}















