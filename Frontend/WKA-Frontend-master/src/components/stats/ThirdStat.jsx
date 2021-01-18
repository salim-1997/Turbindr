import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Point } from 'leaflet';

var UnsortedLeistung = new Array();



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


    function sortLeistung(){
        leistung.sort((a, b) => b - a);
        return leistung;
    }

   
    function sortPlz(){
        UnsortedLeistung=leistung;
        var newPlz = new Array();
        var obj = new Array();
        sortLeistung();
        for (var i = 0; i< UnsortedLeistung.length; i++){

            var elementLeistung = leistung[i];
            var Index = UnsortedLeistung.indexOf(elementLeistung);
            newPlz[i] = plz[Index];
           
        }
        return newPlz;
    }
    


    var sortedPlz = sortPlz();   


    return <div style={{
        height: "700px", width: "70%",
        margin: "0 auto"
    }}>
        {points.map(addLeistungOrElement)}{console.log(plz)}{console.log(leistung)}

        <Bar
            data={{
                labels:  [sortedPlz[0], sortedPlz[1], sortedPlz[2], sortedPlz[3], sortedPlz[4], sortedPlz[5], sortedPlz[6], sortedPlz[7], sortedPlz[8], sortedPlz[9]],
                datasets: [{

                    data: sortLeistung(),
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