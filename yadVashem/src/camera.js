import React, { Component } from 'react';
import iconCamera from './images/iconCamera.png';

export class Camera extends Component {
    constructor(props) {
        super(props);
        this.state = { imageURL: '' }

        this.cameraTakePicture = this.cameraTakePicture.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onFail = this.onFail.bind(this);
        this.shereImage  = this.shereImage.bind(this);
    }
    onSuccess(imageData) {
        console.log("in on success imageData = ",imageData);
           this.setState({imageURL : imageData});
           console.log('imageURL', this.state.imageURL) //use when the option is FILE_URI
        // this.setState({ imageURL: "data:image/jpeg;base64," + imageData })
        this.shereImage()
    }
    onFail(message) {
        // alert('Failed because: ' + message);
    }
    cameraTakePicture() {
        console.log(navigator.camera);
        navigator.camera.getPicture(this.onSuccess, this.onFail, {
            quality: 50,
            //check why it was Camera and not navigator.camera
            destinationType: navigator.camera.DestinationType.FILE_URI,
            saveToPhotoAlbum : true,
            mediaType : navigator.camera.MediaType.ALLMEDIA,
            correctOrientation: true
        });
    }
   
    shereImage(){
        console.log('in whatsapp',this.state.imageURL)
        window.plugins.socialsharing.share(
        null,
        null /* url */, 
        this.state.imageURL /* img */,
        null, 
        );
    }
    render() {
        return (
            <div className="navbarList" onClick = {() => {this.cameraTakePicture(); this.props.HandleNav()}}>
                <img
                    src={iconCamera} alt="Camera icon" />&nbsp;&nbsp;
                    {this.props.shareAMoment}
            </div>
        );
    }
}