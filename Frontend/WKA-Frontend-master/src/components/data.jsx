this.state.position = [
    {
    _id : 0,
    longitude: 15,
    magnitude:14
    }
    {
      _id: 1,
      Longitude: 42,
      magnitude: 14,
    }
    {
      _id: 2,
      Longitude: 32,
      Magnitude: 24
    }
  ]
  const positionRedIcon =[lat , longitude];

createMarker(marker){
    return <Marker position={[marker.Longitude, marker.Latitude]} icon={this.redIcon}>
    <Popup>
    I am a red leaf
    </Popup>
  </Marker>
}
  {position.map(createMarker)};


  <Marker position={[postion[0].Longitude, position[0].Latitude]} icon={this.redIcon}>
            <Popup>
            I am a red leaf
            </Popup>
          </Marker>
  <Marker position={[postion[1].Longitude, position[1].Latitude]} icon={this.redIcon}>
            <Popup>
            I am a red leaf
            </Popup>
   </Marker>
   <Marker position={[postion[2].Longitude, position[2].Latitude]} icon={this.redIcon}>
            <Popup>
            I am a red leaf
            </Popup>
   </Marker>
  

  