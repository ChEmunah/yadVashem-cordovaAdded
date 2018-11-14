import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { GoTo } from './GoTo';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Info } from './info';
import { Map } from './map';
import { Camera } from './camera';
import { LocationsList } from './locationsList';

export class BodyWrapper extends Component {
    render() {
        return (
            <div>
                <Navbar languageNow={this.props.languageNow} direction={this.props.direction} />
                <Switch>
                    <Route path={`/${this.props.languageNow.path}/locationsList`}
                        render={(props) =>
                            <LocationsList {...props}
                                // passes props to coverPage: what language is chosen, the direction of text, the functions for changing the props in main to a different language
                                languageNow={this.props.languageNow}
                                direction={this.props.direction} />
                        } />
                    {/* need to add exact (need to move to the exact url page and not to a different one )*/}
                    <Route path={`/${this.props.languageNow.path}/info`}
                        render={(props) =>
                            <Info {...props}
                                // passes props to coverPage: what language is chosen, the direction of text, the functions for changing the props in main to a different language
                                languageNow={this.props.languageNow}
                                direction={this.props.direction} />
                        } />
                    <Route path={`/${this.props.languageNow.path}/goTo/`}
                        render={(props) =>
                            <GoTo {...props}
                                // passes props to coverPage: what language is chosen, the direction of text, the functions for changing the props in main to a different language
                                languageNow={this.props.languageNow}
                                direction={this.props.direction} />
                        } />
                    <Route path={`/${this.props.languageNow.path}/map/`}
                        render={(props) =>
                            <Map {...props}
                                // passes props to coverPage: what language is chosen, the direction of text, the functions for changing the props in main to a different language
                                languageNow={this.props.languageNow}
                                direction={this.props.direction} />
                        } />
                    <Route path={`/${this.props.languageNow.path}/camera/`}
                        render={(props) =>
                            <Camera {...props}
                                // passes props to coverPage: what language is chosen, the direction of text, the functions for changing the props in main to a different language
                                languageNow={this.props.languageNow}
                                direction={this.props.direction} />
                        } />

                </Switch>
                <Footer languageNow={this.props.languageNow} 
                    direction={this.props.direction} 
                    tempC = {this.props.tempC}
                    tempF = {this.props.tempF}
                />
            </div>
        );
    }
}