import React from "react";
import axios from "axios";
class StatisticsPage extends React.Component{

    constructor(){
        super();
        this.state = {
            latitude : [],
            longitude : []
        };
    }
    componentDidMount = () => {
        
        this.getWkaPosition();
      };
  
      getWkaPosition = () =>{
        axios.get('/coordinates')
        .then((response) =>{
         const data = response.data;
         this.setState({latitude : response.data});
         console.log('succes: data has been received');
         console.log(response.data[0].Latitude);
        })
        .catch(() => {
          alert("data haven't been received!" )
        });
      };
     
      getPosition(){
        return this.state.positions;
      }
    
    render() {
        return <div>"jnfgkiné"</div>;
    }

};

export default StatisticsPage;