import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
function ThirdStat() {
    var [points, setPoints] = useState([]);
    var [plz, setPlz] = useState([]);
    var [leistung, setLeistung] = useState([]);
    var [sorted, setSorted] = useState([]);
    useEffect(() => {
        axios.get('/thirdStat')
            .then((res) => {
                setPoints(res.data);
                console.log('succes: data has been received');
            })
            .catch(() => {
                alert("data haven't been received!")
            })
    }, []);
    function addLeistungOrElement(element) {
        const cePlz = parseFloat(element["PLZ,C,5"]);
        const ceLeistung = parseFloat(element["Leistung,N,13,3"]);
        if (plz.includes(cePlz)) {
            const index = plz.indexOf(cePlz);
            leistung[index] += ceLeistung;

        }
        else {
            plz.push(cePlz);
            leistung.push(ceLeistung);
        }
    }
    //  setLeistung(leistung.sort((a,b) => b-a))

    return <div style={{
        height: "700px", width: "70%",
        margin: "0 auto"
    }}>
        {points.map(addLeistungOrElement)}{console.log(plz)}{console.log(leistung)}
        <Bar
            data={{
                labels: [plz[0], plz[1], plz[2], plz[3], plz[4], plz[5], plz[6], plz[7], plz[8], plz[9]],
                datasets: [{

                    data: [leistung[0], leistung[1], leistung[2], leistung[3], leistung[4], leistung[5], leistung[6], leistung[7], leistung[8], leistung[9]],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }]
            }}
        />
    </div>
}

export default ThirdStat;
// function addLeistungOrElement(element){
//    if (plz.includes(element.plz) ){
//        const index = plz.indexOf(element.plz);
//        leistung[index]=+ element.leistung;
//    }
//    else{
//        plz.push(element.plz);
//        leistung.push(element.leistung);
//    }
// }

// point.map(addLeistungOrElement);



// function addLeistungOrElement(element){
//     const cePlz = parseFloat(element["PLZ,C,5"]);
//     const ceLeistung = parseFloat(element["Leistung,N,13,3"]);
//     var obj ={
//      "PLZ,C,5": cePlz,
//      "Leistung,N,13,3":ceLeistung
//     }
//  if (plz.includes(cePlz)){
//      const index = plz.indexOf(cePlz);
//      // leistung[index] += ceLeistung;
//      sorted[index]["Leistung,N,13,3"] += ceLeistung;
//  }
//  else{
//      sorted.push(element);
//      // plz.push(cePlz);
//      // leistung.push(ceLeistung);
//  }
// }