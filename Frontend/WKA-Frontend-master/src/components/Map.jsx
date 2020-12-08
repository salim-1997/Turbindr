import React ,{Component}from 'react'
import L from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from "axios";
import leafGreen from '../assets/leaf-green.png';
import leafRed from '../assets/leaf-red.png';
import leafOrange from '../assets/leaf-orange.png';
import leafShadow from '../assets/leaf-shadow.png';
import "./Map.css";
import SortierPanel from "./SortierPanel";
class Karte extends Component {
    
    constructor(){
      super();
      this.state = {
          positions : [],
          zoom:8
      };
  }
  componentDidMount = () => {
    axios.get('/coordinates')
    .then((response) =>{
     this.setState({positions : response.data});
     console.log('succes: data has been received');
     console.log(this.state.positions[0].Longitude); // hier funktioniert es
    })
    .catch(() => {
      alert("data haven't been received!" )
    });
    };
    
    
    grenIcon = L.icon({
      iconUrl: leafGreen,
      shadowUrl: leafShadow,
      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76]
    });
  
    redIcon = L.icon({
      iconUrl: leafRed,
      shadowUrl: leafShadow,
      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -86]
    });
  
    orangeIcon = L.icon({
      iconUrl: leafOrange,
      shadowUrl: leafShadow,
      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -86]
    });

   createMarker(marker){
      return <Marker position = {[marker.Latitude, marker.Longitude]} icon={
        L.icon({
      iconUrl: leafRed,
      shadowUrl: leafShadow,
      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -86]
    })} >
               <Popup>
               I am a red leaf
               </Popup>
             </Marker>
  }  
    
    render(){
       //console.log(this.state.positions[0].Longitude); //hier funktioniert es nicht(TypeError: Cannot read property 'Longitude' of undefined)
        return (
          <div>
          <MapContainer className="map" center={[52.45905,13.01582]} zoom={this.state.zoom}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {this.state.positions.map(this.createMarker)}
          </MapContainer>
          <SortierPanel />
          </div>
        );
      }}
    
    
  
export default Karte;












// state = {
    //   greenIcon: {
    //     lat: 35.787449,
    //     lng: -78.6438197,
    //   },
    //   redIcon: {
    //     lat: 35.774416,
    //     lng: -78.633271,
    //   },
    //   orangeIcon: {
    //     lat: 35.772790,
    //     lng: -78.652305,
    //   },
    //   zoom: 13
    // }


// getWkaPosition = () =>{
    //   axios.get('/coordinates')
    //   .then((response) =>{
    //    const data = response.data;
    //    this.setState({positions : data});
    //    console.log('succes: data has been received');
    //   })
    //   .catch(() => {
    //     alert("data haven't been received!" )
    //   });
    // };


// render(){
    //   const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];
    //   const positionGreenIcon = [this.state.greenIcon.lat, this.state.greenIcon.lng];
    //   const positionOrangeIcon = [this.state.orangeIcon.lat, this.state.orangeIcon.lng];
    //   return (
    //     <div>
    //     <MapContainer className="map" center={positionGreenIcon} zoom={this.state.zoom}>
    //       <TileLayer
    //         attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //       />
    //       <Marker position={positionGreenIcon} icon={this.grenIcon}>
    //         <Popup>
    //         I am a green leaf
    //         </Popup>
    //       </Marker>
    //       <Marker position={positionRedIcon} icon={this.redIcon}>
    //         <Popup>
    //         I am a red leaf
    //         </Popup>
    //       </Marker>
    //       <Marker position={positionOrangeIcon} icon={this.orangeIcon}>
    //         <Popup>
    //         I am an orange leaf
    //         </Popup>
    //       </Marker>
    //     </MapContainer>
    //     <SortierPanel />
    //     </div>
    //   );
    // }