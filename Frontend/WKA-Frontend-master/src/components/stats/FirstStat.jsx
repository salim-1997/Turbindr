import React, { useEffect, useState } from 'react';
import { Line, Scatter } from 'react-chartjs-2';
import axios from 'axios';
import moment from 'moment';
import '../StatisticsPage.css';
import { Point } from 'leaflet';


var PointList = new Array();



function FirstStat(props) {
  
  var startDate = moment(props.fromDate, "DD/MM/YYYY");
  var endDate = moment(props.toDate, "DD/MM/YYYY");
  var [points, setPoints] = useState([]);
  useEffect(() => {
    axios.get('/firstStat')
      .then((res) => {
        setPoints(res.data);
        console.log('succes: data has been received');

      })
      .catch(() => {
        alert("no data received!")
      })
  }, []);


  function Crawl(point) {
    /*Erstellt für einen Punkt ein Objekt mit x und y Werten (x=Datum, y=Leistung) und gibt Objekt zurück */
    var obj = {
      x: DateConverter(point["Inbetriebn,D"]),
      y: parseFloat(point["Leistung,N,13,3"].toString().replaceAll(',', '.'))
    }
    if (obj.x == 0) {
      return;
    }
    else {
      return obj;
    }
  }

  function addDate(PointList) {
    /* addiert solange Leistungen der Wkas mit demselben Datum, bis keine gleichen Datumswerte mehr vorhanden sind*/

    for (var i = 1; i < PointList.length; i++) {

      while (PointList[i] == PointList[i - 1]) {

        PointList[i] = sumDate(PointList[i], PointList[i - 1]);
        delete PointList[i - 1];
      }
    }
  }


  function sumDate(a, b) {
    /*Addiert Leistungen zweier Wkas mit demselben Datum */
    return a.y + b.y;
  }
  function LeistungsSumme(PointList)
       /* Addiert die Leistungen der nach Datum sortierten Wkas und gibt PointList zurück*/ {
    addDate(PointList);
    for (var i = 1; i < PointList.length; i++) {

      PointList[i].y = PointList[i].y + PointList[i - 1].y
    }

    return PointList;
  }

  function compareFunction(a, b)
/*vergleicht die Datumswerte der Wkas für die Sort-Funktion */ {
    if (a.x === b.x) {
      return 0;
    }
    else {
      return (a.x < b.x) ? -1 : 1;
    }
  }

  function DateConverter(point) {
    // das sollte ihr aktuell gewünschtes Format liefern - hier müßten Sie jetzt weiterarbeiten
    // TODO --> Turbindr --> Datumsformate...
    return moment(point, "DD.MM.YYYY").format("YYYYMMDD");

  }

  function DateMePlz(PointList) {
    /* Formatiert Datum von Integer in Datum */
    var x = new Date();
    for (var i = 0; i < PointList.length; i++) {
      x = moment(PointList[i].x, "YYYYMMDD").format("YYYY-MM-DD");
      PointList[i].x = x;
    }

    return PointList;
  }

  return <div style={{
    height: "700px", width: "70%",
    margin: "0 auto"
  }}>
    <Line
      className="line"
      options={{
        elements: {
          point: {
            radius: 0,

          }
        },

        title: {
          display: true,
          text: "Leistung über Zeit",
          fontSize: 25
        },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Gesamtleistung (Megawatt)'
            },

          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Datum der Inbetriebnahme',
            },
            type: 'time',
            time: {
              unit: 'year',
              min: moment(startDate,"DD/MM/YYYY" ).format("YYYY-MM-DD"), 
              max: moment(endDate,"DD/MM/YYYY" ).format("YYYY-MM-DD")
            }

          }]
        }
      }}


      data={{
        datasets: [{
          label: 'WKA',
          data: DateMePlz(LeistungsSumme(points.map(Crawl).sort(compareFunction))), //erstellt Punkte für die Statistik
          backgroundColor: "blue",
          borderColor: "blue",
          fill: false,
        }]
      }}
    />
  </div>
}

export default FirstStat;


