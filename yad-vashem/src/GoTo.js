import React, { Component } from 'react';
import * as distancesJson from './distances.json';
import { Link } from 'react-router-dom';

export class GoTo extends Component {
    constructor(props) {
        super(props);
        this.locationsList = this.props.languageNow.locationsList
        this.state = {
            chosenDistance: null,
        }
    }
    componentWillMount() {
        function compare(a, b) {
            const distancedA = a.distance
            const distanceB = b.distance
            let comparison = 0;
            if (distancedA > distanceB) {
                comparison = 1
            } else if (distancedA < distanceB) {
                comparison = -1
            }
            return comparison
        }
        let distances = distancesJson.distances
        let currentPlace = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        let sortFunction = (distances[currentPlace]).sort(compare);
        this.setState({
            chosenDistance: sortFunction,
        });

    }
    render() {
        return (
            <div dir={this.props.direction} >
                <ul>
                    {/* do a map on the keys and according the URL choose which places to display */}
                    {this.state.chosenDistance.map(
                        (item, i) =>
                            (window.location.href.substr(window.location.href.lastIndexOf('/') + 1) !== this.state.chosenDistance[i].name &&
                                <Link to={`/${this.props.languageNow.path}/info/${this.state.chosenDistance[i].name}`}>

                                    <li className="goToList" key={i} value={item}>{Object.keys(this.locationsList).map((location) =>

                                        (location === this.state.chosenDistance[i].name && this.locationsList[location].label))}
                                        &nbsp;
                                        {this.state.chosenDistance[i].distance}
                                        &nbsp;
                                        {this.props.languageNow.goTo.meters}
                                    </li>
                                </Link>

                            )
                    )}
                </ul>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2336.454583782142!2d35.173794308600435!3d31.774196732209422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150329d1a4886b3f%3A0x642a9fd5d5c70ae6!2sYad+Vashem!5e0!3m2!1sen!2sil!4v1540979407584"
                 width="350" height="450" frameborder="0" style={{border:0}} allowfullscreen></iframe>
               */}
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        );
    }
}