import React, { Component } from 'react';
import { LanguageButtons } from './languageButtons';



export class CoverPage extends Component {
    componentDidMount(){
        this.props.getWeather();
    }
    render() {
        return (
            <div className="coverPage" dir={this.props.direction} >
                {/* logo */}
                <div className="logoImageYadVashen">
                    <img src={this.props.languageNow.coverPage.imgSrc} alt="Yad Vashem logo" />
                </div>
                <LanguageButtons
                    turnEnglish={this.props.turnEnglish}
                    languageNow={this.props.languageNow}
                    direction={this.props.direction}
                    turnHebrew={this.props.turnHebrew} />
                <br /><br /><br /><br />
                {/* changes URL to next page(locations list) */}
                <div dir={(this.props.direction === "ltr" ? "rtl" : "ltr")}>
                    <button
                        // dir={this.props.direction} 
                        id="CoverpagenextButton"
                        // dir = {(this.props.direction === "ltr" ?  "rtl" : "ltr")}
                        onClick={() => { this.props.history.push(`/${this.props.languageNow.path}/locationsList`) }}>
                        {this.props.languageNow.coverPage.next}
                    </button>
                        
                </div>
                {/* <div className = "loader"></div> */}
            </div>
        );
    }
}
export default CoverPage;