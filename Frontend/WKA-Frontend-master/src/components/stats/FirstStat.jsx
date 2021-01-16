import React, {useEffect, useState} from 'react';
import {Scatter} from 'react-chartjs-2';
import axios from 'axios';
import moment from 'moment';
import '../StatisticsPage.css';
import { Point } from 'leaflet';

var i = 0;
var PointList = new Array();






function compareFunction(a, b)
/*vergleicht die Datumswerte der Wkas für die Sort-Funktion */
{
  if (a.x === b.x){
    return 0;
  }
  else {
    return (a.x < b.x) ? -1 : 1;
  }
}

function DateConverter(point) {
  // das sollte ihr aktuell gewünchtes Format liefern - hier müßten Sie jetzt wieterarbeiten
  // TODO --> Turbindr --> Datumsformate...
  return moment(point, "DD.MM.YYYY").format("YYYYMMDD");



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

       function LeistungsSumme(PointList) 
       /* Addiert die Leistungen der nach Datum sortierten Wkas*/
       {
          PointList.forEach(element => {
            for (var i=1; i<PointList.length; i++){
              PointList[i].y = PointList[i].y + PointList[i-1].y;
            }
          });
       }

       function Gesamtleistung(obj){ //erstellt Liste der Punkte mit Leistung und Datum nach Datum sortiert und mit Leistung addiert in 2DArray
        if (obj == 0){
          return PointList;
        }
        else
        {

          PointList.push(obj);
          PointList.sort(compareFunction);
          LeistungsSumme(PointList);

        /*var ObjArray = [obj.x, obj.y];
        PointList.push(ObjArray);
        PointList.sort(compareFunction);

        PointList.forEach(element => {
          for (var i=1; i< PointList.length-1; i++){
            PointList[i][1] = PointList[i][1]+ PointList[i-1][1];
          }
        });*/
        return PointList;
      }
       }



       function Crawl(point){     //soll die Punkte einzeln returnen
        var obj =  {
          x: DateConverter(point["Inbetriebn,D"]), 
          y: parseFloat(point["Leistung,N,13,3"].toString().replaceAll(',', '.'))
        }
        if (obj.x == 0){
          return 0;
       }
       else{
         return obj;
       }
       }


       function createPoints(point){  
      /*soll die fertige Liste von Punkten returnen*/
                   
         
          if (i < 200 ){ /*stellt Abbruchbedingung dar (Prototyp)*/
            Gesamtleistung(Crawl(point));
            i++;
            return;
          }
          else { //wenn keine neuen Punkte mehr vorhanden sind, soll PointList ausgegeben werden
            if (PointList.length > 0){

            
            /*var p = PointList.pop(); 
            var objp =  {
              x: p[0],
              y: p[1]
            }*/
          
          return PointList;
          }
           else{

             return;

           }
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
            data: points.map(createPoints), //erstellt Punkte für die Statistik
            backgroundColor: "red"
        }]
 }}
  />
   </div>
}

export default FirstStat;
