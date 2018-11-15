import React, { Component } from 'react';

export class CurrentMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Latitude: "",
            Longitude: ""

        }
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
    }
     componentDidMount(){
         console.log('its downloading!')
        let fileTransfer = new FileTransfer();
        let uri = encodeURI("https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
        
        fileTransfer.download(
            uri,
            fileURL,
            (entry)=> {
                console.log("download complete: " + entry.toURL());
            },
            (error)=> {
                console.log("download error source " + error.source);
                console.log("download error target " + error.target);
                console.log("download error code" + error.code);
            },
            false,
            {
                headers: {
                    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                }
            }
        );
     }
    onSuccess(position) {
        this.setState({
            Latitude: position.coords.latitude,
            Longitude: position.coords.longitude
        });
    };
    onError(error) {
        alert('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }
    render() {
        return (
            <div>
                {
                    navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError)
                }
                <h1>
                    1.Latitude ={this.state.Latitude}
                    <br></br>
                    2. Longitude ={this.state.Longitude}
                </h1>
                {/* example of doing a static map! */}
                {/* https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=YOUR_API_KEY */}
{
   }
            </div>
        )
    }
}