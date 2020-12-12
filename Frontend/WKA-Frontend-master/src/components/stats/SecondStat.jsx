import React, {useEffect, useState} from 'react';
import {Scatter} from 'react-chartjs-2';
import axios from 'axios';
import '../StatisticsPage.css';

function SecondStat(){
    var [points,setPoints] = useState([]); 
    useEffect(() =>{
        axios.get('/secStat')
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
            x: point["Nabenhoehe,N,11,2"],
            y: point["Rotordurch,N,11,2"]
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
				        text: "Nabenhöhe vs. Rotordurchmesser",
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

export default SecondStat;

// for (i=0), i <= points.length, i++){
//     data[i] = {
//         x : points[i],
//         y : points[i]
//     }
// }

// function createPoints(point){
// return {{
//     x: point["Nabenhoehe,N,11,2"],
//     y: point["Rotordurch,N,11,2"]
// }}
// }
// points.map(createPoints)