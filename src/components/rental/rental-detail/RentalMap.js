import React ,{Component}from 'react';
import {MapWithGeoCode} from '../../map/GoogleMap';


export class RentalMap extends Component {
    render(){
        const location= this.props.location;
        return (
        <MapWithGeoCode
         isMarkerShown
         googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDW9tFSqG2mA0ym2NluRBVGZ6tPr8xbwRM&?v=3.exp&libraries=geometry,drawing,places"
         loadingElement={<div style={{ height: `100%` }} />}
         location={location}
         containerElement={<div style={{ height: `360px` }} />}
         mapElement={<div style={{ height: `100%` }} />}
        />
        )
    }
}