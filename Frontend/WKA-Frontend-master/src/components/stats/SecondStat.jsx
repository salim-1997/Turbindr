import React, { useEffect, useState } from "react";
import { Scatter } from "react-chartjs-2";
import axios from "axios";
import "../StatisticsPage.css";
import moment from "moment";

function SecondStat(props) {
  var [points, setPoints] = useState([]);
  var startDate = moment(props.fromDate, "DD/MM/YYYY");
  var endDate = moment(props.toDate, "DD/MM/YYYY");
  var status = props.status;
  useEffect(() => {
    axios
      .get("/secStat")
      .then((res) => {
        setPoints(res.data);
        console.log("succes: data has been received");
      })
      .catch(() => {
        alert("data haven't been received!");
      });
  }, []);
  function createPoints(point) {
    if (status == "inBetriebsnahme") {
      var m = moment(point["Inbetriebn,D"], "DD.MM.YYYY");
      if (m.isBefore(endDate) && m.isAfter(startDate)) {
        var obj = {
          x: point["Nabenhoehe,N,11,2"],
          y: point["Rotordurch,N,11,2"],
        };
        return obj;
      }
    } else if (status == "genehmigt") {
      var m = moment(point["Genehmigt,D"], "DD.MM.YYYY");
      if (m.isBefore(endDate) && m.isAfter(startDate)) {
        var obj = {
          x: point["Nabenhoehe,N,11,2"],
          y: point["Rotordurch,N,11,2"],
        };
        return obj;
      }
    }
  }
  return (
    <div style={{ height: "700px", width: "70%", margin: "0 auto" }}>
      <Scatter
        className="scatter"
        options={{
          title: {
            display: true,
            text: "Nabenhöhe vs. Rotordurchmesser",
            fontSize: 25,
          },
          scales: {
            yAxes:[{
              scaleLabel: {
                display: true,
                labelString: 'Rotordurchmesser (Meter)'
              },
        
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
              
                labelString: 'Nabenhöhe (Meter)',
               
                
              },
              
          }]
        }
        }}
        data={{
          datasets: [
            {
              label: "WKA",
              data: points.map(createPoints),
              backgroundColor: "red",
            },
          ],
        }}
      />
    </div>
  );
}
export default SecondStat;
