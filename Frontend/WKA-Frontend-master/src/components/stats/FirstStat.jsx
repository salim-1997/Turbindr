import React, {useEffect, useState} from 'react';
import {Scatter} from 'react-chartjs-2';
import axios from 'axios';
import moment from 'moment';
import '../StatisticsPage.css';


function replaceComma (point){

   var newLeistung = point;

for (var i = 0; i < point.lenght; i++){

  if (point.charAt(i) ==","){

     newLeistung.replace(/,/g,'.');
  }
  
}
return newLeistung;

}

function DateConverter (point) {

    // das sollte ihr aktuell gewünchtes Format liefern - hier müßten Sie jetzt wieterarbeiten
    // TODO --> Turbindr --> Datumsformate...
    return moment(point, "DD.MM.YYYY").format('YYYYMMDD')

/*  var day1;
  var day2;
  var month1;
  var month2;
  var year1;
  var year2;
  var year3;
  var year4;


  for (var i= 0; i < 10; i++){
    if (i === 0 ) {
  day1 = point.charAt(i);
}
   if (i === 1 ){
    day2 = point.charAt(i);
   }
   if (i === 3){
     month1 =point.charAt(i);
   }
   if (i === 4){
    month2 =point.charAt(i);
  }
  if (i === 6){
    year1 =point.charAt(i);
  }
  if (i === 7){
    year2 =point.charAt(i);
  }
  if (i === 8){
    year3 =point.charAt(i);
  }
  if (i === 9){
    year4 =point.charAt(i);
  }

}
return year1 + year2 + year3 + year4 + month1 + month2 + day1 +day2;
*/
}

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
            x: DateConverter(point["Inbetriebn,D"]), 
            y: parseFloat(point["Leistung,N,13,3"])
          }
          if (obj.x == 0){
            return;
          }
          else {
            return obj;
          }
          
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

export default FirstStat; 


