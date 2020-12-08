import React from "react";
import axios from "axios";
class StatisticsPage extends React.Component{

    constructor(){
        super();
        this.state = {
            positions : []
        };
    }
    componentDidMount = () => {
        
        this.getWkaPosition();
      };
  
      getWkaPosition = () =>{
        axios.get('/coordinates')
        .then((response) =>{
         const data = response.data;
         this.setState({positions : data});
         console.log('succes: data has been received');
         //console.log(this.state.positions);
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