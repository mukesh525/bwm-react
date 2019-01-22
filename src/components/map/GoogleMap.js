import { withScriptjs, withGoogleMap, GoogleMap, Circle ,InfoWindow} from "react-google-maps";
import React from 'react';
import {Cacher} from "services/cacher";

function MapComponent(props){
    const {coordinates,isError,isLocationLoaded} = props;
    debugger;
    return(
    <GoogleMap
        defaultZoom={13}
        defaultCenter={coordinates}
        center={coordinates}
        options={{disableDefaultUI:isError}}
     >
       {isLocationLoaded && !isError && <Circle center={coordinates} radius ={500} /> }
       {isLocationLoaded && isError && < InfoWindow position ={coordinates} options ={{maxWidth:300}}>
           <div>
             There is a problem to find location in map, we are trying to resolve problem as fast as possible.
           </div>
       </InfoWindow> }
    </GoogleMap>
    )
}

function withGeoCode(WrappedComponent){
 return class extends React.Component{ 
   constructor() {
       super();
        this.cacher = new Cacher();
        this.state = {
            coordinates:{
                lat:0,
                lng:0
            }   ,
            isError:false  ,
            isLocationLoaded:false   
        }
    }

    updateCoordinates(coordinates){
        this.setState({coordinates,isLocationLoaded:true})
    }

    componentWillMount(){
      this.geoCodedLocation();
    }

    geoCodeLocation(location){
        const geocoder = new window.google.maps.Geocoder();
        return new  Promise((resolve,reject)=>{
            geocoder.geocode({address:location},(result,status)=>{
                if(status === 'OK') {
                    const geometry =  result[0].geometry.location;
                    const coordinates ={lat:geometry.lat(),lng:geometry.lng()}
                    this.cacher.cacheValue(location,coordinates)
                    resolve(coordinates);
                }else{
                    reject('ERRROR !!')
                }
            })
        })

    }


     
    geoCodedLocation(){
        const location = this.props.location;
         if(this.cacher.isValueCached(location)){
            this.updateCoordinates(this.getCachedValue(location))
        }
        else{
            this.geoCodeLocation(location).then(
            (coordinates)=>{
                this.updateCoordinates(coordinates)
            },
            (error)=>{
                this.setState({isError:true,isLocationLoaded:true })
            });
        }
      

    }
 
    render(){
            return (
                <WrappedComponent {...this.state}/>
            )
        }
    }
}



export const MapWithGeoCode = withScriptjs(withGoogleMap(withGeoCode(MapComponent)));
