import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import "../StatisticsPage.css";
var dateStr = "#";

function FourthStat() {
  var [date, setDate] = useState([]);

  useEffect(() => {
    axios
      .get("/fouStat")
      .then((res) => {
        setDate(res.data);
        console.log("succes: data has been received");
      })
      .catch(() => {
        alert("data haven't been received!");
      });
  }, []);

  function createDate(date) {
    obj = {
      x: date["Gehnehmigt,D"],
      y: date["Inbetriebn,D"],
    };
    return obj;
  }
  var obj;
  dateStr = obj;

  return (
    <div style={{ height: "700px", width: "70%", margin: "0 auto" }}>
      <Bar
        classname="bar"
        options={{
          title: {
            display: true,
            text: dateStr,
            fontSize: 25,
          },
        }}
        data={{
          datasets: [
            {
              label: "WKA",
              data: date.map(createDate),
              backgroundColor: "red",
            },
          ],
        }}
      />
    </div>
  );
}
export default FourthStat;
