import React, { Component } from 'react';
import iconLeftArrow from './images/iconLeftArrow.png';
import iconRightArrow from './images/iconRightArrow.png';
import { languages } from './languages';


export class Slider extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        currentIndex: 0,
        imagesArray:languages.Globals.locationsList[window.location.href.substr(window.location.href.lastIndexOf('/') + 1)].imgSrc
      }
      this.nextImage = this.nextImage.bind(this);
      this.previusImage = this.previusImage.bind(this);
    }
    
    nextImage(){
        if(this.state.currentIndex < this.state.imagesArray.length-1){
            this.setState({currentIndex: this.state.currentIndex + 1})
        } if(this.state.currentIndex === this.state.imagesArray.length-1){
          this.setState({currentIndex: 0})
        }
    }
  
    previusImage(){
      if(this.state.currentIndex > 0){
          this.setState({currentIndex: this.state.currentIndex - 1})
      } if(this.state.currentIndex === 0){
        this.setState({currentIndex: this.state.imagesArray.length - 1})
      }
    }
    render() {
      return (
        <div className="slider" dir = "rtl">
          <img className={'locationImage'}
              src={this.state.imagesArray[this.state.currentIndex]}
              alt={this.state.imagesArray[this.state.currentIndex]} />
          {(this.state.imagesArray.length - 1 > 0
               && 
          <div className = "navegationButtonsSlider">
          <span onClick = {this.nextImage} className = 'arrow'><img src={iconRightArrow} alt="icon right arrow" /></span>
          <span onClick = {this.previusImage} className = 'arrow' style = {{position:"relative", right:"260px"}} ><img src={iconLeftArrow} alt="icon left arrow" /></span>
          </div>
           )} 
  
        </div>
      );
    }
  }
  
  

  
  
  
  
  
  
  
  
  
  
  