import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import iconWalkingMan from './images/iconWalkingMan.png'
import iconHandicap from './images/iconHandicap.png'
import iconWheelchair from './images/iconWheelchair.png'
import { languages } from './languages';
import * as distancesJson from './distances.json';


export class LocationsList extends Component {
    constructor(props) {
        super(props);
        this.locationsList = this.props.languageNow.locationsList
        this.Globals = languages.Globals.locationsList
        this.state = {
            searchValue: "",
            currentArrayOfPlaces: []
        }


        this.searchEventHandler = this.searchEventHandler.bind(this);
    }

    searchEventHandler(event) {
        this.setState({ searchValue: event.target.value });
    }

    render() {
        return (
            <div className="AllLocationsList  overflow" dir={this.props.direction}>
                <div className="header" >
                    <form >
                        <input type="text" placeholder={this.props.languageNow.locationListPage.placeHolderSearch} name="searchLocationList" value={this.state.searchValue} onChange={this.searchEventHandler} ></input>
                    </form>
                </div>
                <br></br><br></br>
                {/* maps over all places in order to display diffarent information about them in a list */}
                {Object.keys(this.locationsList).map((item, i) => {
                    if (item === "Entrance")
                        return null;
                    const condSearchLabel = this.locationsList[item].label.toString().toLowerCase().includes(this.state.searchValue.toLowerCase());
                    const condSearchID = this.Globals[item].id.toString().toLowerCase().includes(this.state.searchValue.toLowerCase());
                    return (
                        <div key={i}>
                            {

                                // next line refers to the search by id
                                ((condSearchID || condSearchLabel) ?
                                    <div className="aLocation" key={this.locationsList[item].id}>
                                        <Link to={`/${this.props.languageNow.path}/info/${item}`}>
                                            <img className={`${this.props.direction}locationListImage`}
                                                src={this.Globals[item].imgSrc[0]}
                                                alt={this.locationsList[item].label} />
                                            <div className="aLocationsText">
                                                {/* icon amount of steps */}
                                                &nbsp;
                                <b>{this.locationsList[item].label}</b>
                                                <img src={iconWalkingMan} alt="amount of steps" />
                                                {distancesJson.distances.Entrance.map((location, index) => {
                                                    return <span key={index}>{(location.name === item && location.distance)}</span>
                                                })}
                                                {/* icon accessible */}
                                                &nbsp;
                                                {this.Globals[item].handicap === true &&
                                                    <img src={iconHandicap} alt="iconHandicap" />}
                                                {/* icon accessible with helper */}
                                                &nbsp;
                                {this.Globals[item].wheelchair === true &&
                                                    <img src={iconWheelchair} alt="iconWheelchair" />}
                                                {/* description about place */}
                                                {this.locationsList[item].description}

                                            </div>
                                        </Link>

                                    </div>
                                    : null)



                            }
                        </div>
                    )
                }
                )
                }
            </div>
        );
    }
}


export default Location;