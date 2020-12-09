import React ,{useEffect, useState}from 'react'
import L from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from "axios";
import leafGreen from '../assets/leaf-green.png';
import leafRed from '../assets/leaf-red.png';
import leafOrange from '../assets/leaf-orange.png';
import leafShadow from '../assets/leaf-shadow.png';
import "./Map.css";
function Karte(props) {
   const[positions, setPositions] = useState([]);
   useEffect(() =>{
    axios.get('/coordinates')
      .then((res) =>{
       setPositions(res.data);
       console.log('succes: data has been received');
      })
      .catch(() => {
        alert("data haven't been received!" )
      })
   },[]);

    const grenIcon = L.icon({
      iconUrl: leafGreen,
      shadowUrl: leafShadow,
      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76]
    });
  
    const redIcon = L.icon({
      iconUrl: leafRed,
      shadowUrl: leafShadow,
      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -86]
    });
  
    const orangeIcon = L.icon({
      iconUrl: leafOrange,
      shadowUrl: leafShadow,
      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -86]
    });
  
   function createMarker(marker){
      if (marker["Status,C,20"] === props.status){
   
      return <Marker onClick={()=>{console.log(marker.Latitude)}}position = {[marker.Latitude, marker.Longitude]} icon={grenIcon} >
               <Popup>
               Selected !
               </Popup>
             </Marker>
      }}
        return (
          <div>
          <MapContainer className="map" center={[52.45905,13.01582]} zoom={9}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {positions.map(createMarker)}
          </MapContainer>
          </div>
        );
      }
    
    
  
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