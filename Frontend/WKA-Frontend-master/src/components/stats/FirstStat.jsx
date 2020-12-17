/**import React, {useEffect, useState} from 'react';
import {Scatter} from 'react-chartjs-2';
import axios from 'axios';
import '../StatisticsPage.css';

function FirstStat(){
    var [points,setPoints] = useState([]); 
    useEffect(() =>{
        axios.get('/firstStat')
          .then((res) =>{
          setPoints(res.data);
          console.log('succes: data has been received');
         
          })
          .catch(() => {
            alert("data haven't been received!" )
          })
       },[]);
       function createPoints(point){
          var obj = {
            x: parseFloat(point["Inbetriebn,D"]),
            y: parseFloat(point["Leistung,N,13,3"])
          }
          return obj;
        }
 return <div style={{height:"700px",width:"70%",
    margin:"0 auto"
    }}>
 <Scatter
className="scatter"
options = 	{{ 
			title:{
                display : true,
				        text: "Leistung über Zeit",
                fontSize: 25}
            }}
            
data={{
    datasets: [{
            label: 'WKA',
            data: points.map(createPoints),
            backgroundColor: "red"
        }]
 }}
  />
   </div>
}

export default FirstStat; **/