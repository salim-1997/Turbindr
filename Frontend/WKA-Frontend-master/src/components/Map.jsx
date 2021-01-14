import React ,{useEffect, useState}from 'react'
import L from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from "axios";
import NaviBar from "./NaviBar";
import leafGreen from '../assets/turbine.png';
import leafRed from '../assets/leaf-red.png';
import leafOrange from '../assets/leaf-orange.png';
import leafShadow from '../assets/leaf-shadow.png';
import {BrowserRouter as Router ,Switch ,Route } from "react-router-dom";
import "./DetailsPage.css"
import "./Map.css";
function Karte(props) {
   const[positions, setPositions] = useState([]);
   var [clickedOn,setClickedOn] = useState("");
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
      iconSize:     [18, 24], // size of the icon
      shadowSize:   [0, 0], // size of the shadow
      iconAnchor:   [18, 24], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76]
    });
    const[wkaInfo, setWkaInfo] = useState({
      _id: "5f7249efabc82db972909544",
      "Betreiber,C,120": "Dezentrale Energie Anlagen zweite GmbH & Co. Windpark Oyten 3 KG",
      "Bst_Nr,C,11": 10652840000,
      "Bst_Name,C,120": "Dezentrale Energie Anlagen zweite GmbH & Co. Windpark Oyten 3 KG",
      "Ort,C,254": "Oranienburg",
      "Ortsteil,C,254": "Zehlendorf",
      "Anl_Nr,C,9": 6001,
      "Anl_Bez,C,60": "Vestas V 47/660-76",
      "Genehmigt,D": "24.06.2002",
      "Ostwert,N,8,0": 393480,
      "Nordwert,N,7,0": 5850040,
      Latitude: 52.7896428,
      Longitude: 13.42037676,
      "Kreis,C,40": "LK Oberhavel",
      "Geme_Kenn,C,8": 12065256,
      "PLZ,C,5": 16515,
      "Inbetriebn,D": "07.02.2003",
      "Alt_an_anz,D": "",
      "Leistung,N,13,3": "0,66",
      "Status,C,20": "in Betrieb",
      "Nabenhoehe,N,11,2": 76,
      "Rotordurch,N,11,2": 47,
      "LW_TAG,N,11,2": -99,
      "LW_Nacht,N,11,2": -99,
      "Stand_Abw,N,11,2": -99,
      "Wka_ID,C,15": 106528400006001
        });
        
         useEffect(() =>{
          axios.get('/' + clickedOn )
            .then((response) =>{
             setWkaInfo(response.data);
             console.log('succes: data has been received');
             console.log(response.data);
            })
            .catch(() => {
              alert("data haven't been received!" )
            })
         },[clickedOn]);
    

  
   function createMarker(marker){
      if (marker["Status,C,20"] === props.status){
      
      return <Marker eventHandlers={{
        click: () => {setClickedOn(marker._id);console.log(wkaInfo)}} } key ={marker._id} position = {[marker.Latitude, marker.Longitude]} icon={grenIcon} >
               <Popup>
               Selected!
               </Popup>
             </Marker>
      }
      else if (marker["Status,C,20"] !== props.status){
        if (props.status <= "alle") {

       return <Marker eventHandlers={{
         click: () => {setClickedOn(marker._id);console.log(wkaInfo)}} } key ={marker._id} position = {[marker.Latitude, marker.Longitude]} icon={grenIcon} >
                <Popup>
                Selected!
                </Popup>
              </Marker>
     
       }
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
          
          <table>
    <tr>
      <th>Betreiber</th>
      <th>{wkaInfo["Betreiber,C,120"]}</th>
    </tr>
    <tr>
      <td>Betriebstättennummer</td>
      <td>{wkaInfo["Bst_Nr,C,11"]}</td>
    </tr>
    <tr>
      <td>Betriebsbezeichnung</td>
      <td>{wkaInfo["Bst_Name,C,120"]}</td>
    </tr>
    <tr>
      <td>Ort</td>
      <td>{wkaInfo["Ort,C,254"]}</td>
    </tr>
    <tr>
      <td>Ortsteil</td>
      <td>{wkaInfo["Ortsteil,C,254"]}</td>
    </tr>
    <tr>
      <td>Anlagennummer</td>
      <td>{wkaInfo["Anl_Nr,C,9"]}</td>
    </tr>
    <tr>
      <td>Bezeichnung der Anlage</td>
      <td>{wkaInfo["Anl_Bez,C,60"]}</td>
    </tr>
    <tr>
      <td>Genehmigt am</td>
      <td>{wkaInfo["Genehmigt,D"]}</td>
    </tr>
    <tr>
      <td>Ostwert</td>
      <td>{wkaInfo["Ostwert,N,8,0"]}</td>
    </tr>
    <tr>
      <td>Nordwert</td>
      <td>{wkaInfo["Nordwert,N,7,0"]}</td>
    </tr>
    <tr>
      <td>Kreis</td>
      <td>{wkaInfo["Kreis,C,40"]}</td>
    </tr>
    <tr>
      <td>gemeindschlüssel</td>
      <td>{wkaInfo["Geme_Kenn,C,8"]}</td>
    </tr>
    <tr>
      <td>PLZ</td>
      <td>{wkaInfo["PLZ,C,5"]}</td>
    </tr>
    <tr>
      <td>in Betriebsnahme am</td>
      <td>{wkaInfo["Inbetriebn,D"]}</td>
    </tr>
    <tr>
      <td>Altanlagenanzeige am</td>
      <td>{wkaInfo["Alt_an_anz,D"]}</td>
    </tr>
    <tr>
      <td>Leistung (Megawatt)</td>
      <td>{wkaInfo["Leistung,N,13,3"]}</td>
    </tr>
    <tr>
      <td>Status</td>
      <td>{wkaInfo["Status,C,20"]}</td>
    </tr>
    <tr>
      <td>Nabenhöhe (meter)</td>
      <td>{wkaInfo["Nabenhoehe,N,11,2"]}</td>
    </tr>
    <tr>
      <td>Rotordurchmesser</td>
      <td>{wkaInfo["Rotordurch,N,11,2"]}</td>
    </tr>
    <tr>
      <td>Schallleistungspegel Tag(db(A))</td>
      <td>{wkaInfo["LW_TAG,N,11,2"]}</td>
    </tr>
    <tr>
      <td>Schallleistungspegel Nacht(db(A))</td>
      <td>{wkaInfo["LW_Nacht,N,11,2"]}</td>
    </tr>
    <tr>
      <td>Standardabweichung Schallleistungspegel (db(A))</td>
      <td>{wkaInfo["Wka_ID,C,15"]}</td>
    </tr>
  </table>
  
          </div>
        );
      }
    
    
  
export default Karte;




// <DetailsPage
//            betreiber={wkaInfo["Betreiber,C,120"]}
//            betriebstättennummer={wkaInfo["Betreiber,C,120"]}
//            betriebsbezeichnung={wkaInfo["Bst_Nr,C,11"]}
//            ort={wkaInfo["Ort,C,254"]}
//            ortsteil={wkaInfo["Ortsteil,C,254"]}
//            anlagennummer={wkaInfo["Anl_Nr,C,9"]}
//            bezeichnungDerAnlage={wkaInfo["Anl_Nr,C,9"]}
//            genehmigtAm={wkaInfo["Genehmigt,D"]}
//            ostwert={wkaInfo["Ostwert,N,8,0"]}
//            nordwert={wkaInfo["Nordwert,N,7,0"]}
//            kreis={wkaInfo["Kreis,C,40"]}
//            gemeindschlüssel={wkaInfo["Geme_Kenn,C,8"]}
//            plz={wkaInfo["PLZ,C,5"]}
//            inBetriebAm={wkaInfo["Inbetriebn,D"]}
//            altanlagenanzeigeAm={wkaInfo["Alt_an_anz,D"]}
//            leistung={wkaInfo["Leistung,N,13,3"]}
//            status={wkaInfo["Status,C,20"]}
//            nabenhöhe={wkaInfo["Nabenhoehe,N,11,2"]}
//            rotordurchmesser={wkaInfo["Rotordurch,N,11,2"]}
//            schallleistungspegelTag={wkaInfo["LW_TAG,N,11,2"]}
//            schallleistungspegelNacht={wkaInfo["LW_Nacht,N,11,2"]}
//            standardabweichungSchallleistungspegel={wkaInfo["Wka_ID,C,15"]}
//            />





//const redIcon = L.icon({
  //   iconUrl: leafRed,
  //   shadowUrl: leafShadow,
  //   iconSize:     [38, 95], // size of the icon
  //   shadowSize:   [50, 64], // size of the shadow
  //   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  //   shadowAnchor: [4, 62],  // the same for the shadow
  //   popupAnchor:  [-3, -86]
  // });

  // const orangeIcon = L.icon({
  //   iconUrl: leafOrange,
  //   shadowUrl: leafShadow,
  //   iconSize:     [38, 95], // size of the icon
  //   shadowSize:   [50, 64], // size of the shadow
  //   iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  //   shadowAnchor: [4, 62],  // the same for the shadow
  //   popupAnchor:  [-3, -86]
  // });

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