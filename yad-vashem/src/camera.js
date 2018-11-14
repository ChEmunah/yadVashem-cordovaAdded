import React, { Component } from 'react';
import iconCamera from './images/iconCamera.png';

export class Camera extends Component {
    constructor(props) {
        super(props);
        
        this.cameraTakePicture = this.cameraTakePicture.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onFail = this.onFail.bind(this);
    }
    onSuccess(imageData) {
        window.plugins.socialsharing.share(
            null,
            null /* url */, 
            // this.state.imageURL /* img */,
            imageData,
            null, 
            );
    }
    onFail(message) {
        alert('Failed because: ' + message);
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