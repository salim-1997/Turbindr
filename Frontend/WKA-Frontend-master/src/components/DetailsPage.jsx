import React , {useState , useEffect} from "react";
import axios from "axios";
import Karte from "./Map";
import "./DetailsPage.css"
function DetailsPage(props){
  const[wkaInfo, setWkaInfo] = useState({
_id: "5f7249efabc82db972909544",
"Betreiber,C,120": "Dezentrale Energie Anlagen zweite GmbH & Co. Windpark Oyten 3 KG",
"Bst_Nr,C,11": 10652840000,
"Bst_Name,C,120": "Dezentrale Energie Anlagen zweite GmbH & Co. Windpark Oyten 3 KG",
"Ort,C,254": "Oranienburg",
"Ortsteil,C,254": "Zehlendorf",
"Anl_Nr,C,9": 6001,
"Anl_Bez,C,60": "Vestas V 47/660-76",
"Genehmigt,D": "24.06.2002",
"Ostwert,N,8,0": 393480,
"Nordwert,N,7,0": 5850040,
Latitude: 52.7896428,
Longitude: 13.42037676,
"Kreis,C,40": "LK Oberhavel",
"Geme_Kenn,C,8": 12065256,
"PLZ,C,5": 16515,
"Inbetriebn,D": "07.02.2003",
"Alt_an_anz,D": "",
"Leistung,N,13,3": "0,66",
"Status,C,20": "in Betrieb",
"Nabenhoehe,N,11,2": 76,
"Rotordurch,N,11,2": 47,
"LW_TAG,N,11,2": -99,
"LW_Nacht,N,11,2": -99,
"Stand_Abw,N,11,2": -99,
"Wka_ID,C,15": 106528400006001
  });
   useEffect(() =>{
    axios.get('/' + props.id )
      .then((response) =>{
       setWkaInfo(response.data);
       console.log('succes: data has been received');
       console.log(wkaInfo);
      })
      .catch(() => {
        alert("data haven't been received!" )
      })
   },[]);
   <Map onclicked={useEffect} />
    return <table>
    <tr>
      <th>Betreiber</th>
      <th>{wkaInfo["Betreiber,C,120"]}</th>
    </tr>
    <tr>
      <td>Betriebstättennummer</td>
      <td>{wkaInfo["Bst_Nr,C,11"]}</td>
    </tr>
    <tr>
      <td>Betriebsbezeichnung</td>
      <td>{wkaInfo["Bst_Name,C,120"]}</td>
    </tr>
    <tr>
      <td>Ort</td>
      <td>{wkaInfo["Ort,C,254"]}</td>
    </tr>
    <tr>
      <td>Ortsteil</td>
      <td>{wkaInfo["Ortsteil,C,254"]}</td>
    </tr>
    <tr>
      <td>Anlagennummer</td>
      <td>{wkaInfo["Anl_Nr,C,9"]}</td>
    </tr>
    <tr>
      <td>Bezeichnung der Anlage</td>
      <td>{wkaInfo["Anl_Bez,C,60"]}</td>
    </tr>
    <tr>
      <td>Genehmigt am</td>
      <td>{wkaInfo["Genehmigt,D"]}</td>
    </tr>
    <tr>
      <td>Ostwert</td>
      <td>{wkaInfo["Ostwert,N,8,0"]}</td>
    </tr>
    <tr>
      <td>Nordwert</td>
      <td>{wkaInfo["Nordwert,N,7,0"]}</td>
    </tr>
    <tr>
      <td>Kreis</td>
      <td>{wkaInfo["Kreis,C,40"]}</td>
    </tr>
    <tr>
      <td>gemeindschlüssel</td>
      <td>{wkaInfo["Geme_Kenn,C,8"]}</td>
    </tr>
    <tr>
      <td>PLZ</td>
      <td>{wkaInfo["PLZ,C,5"]}</td>
    </tr>
    <tr>
      <td>in Betriebsnahme am</td>
      <td>{wkaInfo["Inbetriebn,D"]}</td>
    </tr>
    <tr>
      <td>Altanlagenanzeige am</td>
      <td>{wkaInfo["Alt_an_anz,D"]}</td>
    </tr>
    <tr>
      <td>Leistung (Megawatt)</td>
      <td>{wkaInfo["Leistung,N,13,3"]}</td>
    </tr>
    <tr>
      <td>Status</td>
      <td>{wkaInfo["Status,C,20"]}</td>
    </tr>
    <tr>
      <td>Nabenhöhe (meter)</td>
      <td>{wkaInfo["Nabenhoehe,N,11,2"]}</td>
    </tr>
    <tr>
      <td>Rotordurchmesser</td>
      <td>{wkaInfo["Rotordurch,N,11,2"]}</td>
    </tr>
    <tr>
      <td>Schallleistungspegel Tag(db(A))</td>
      <td>{wkaInfo["LW_TAG,N,11,2"]}</td>
    </tr>
    <tr>
      <td>Schallleistungspegel Nacht(db(A))</td>
      <td>{wkaInfo["LW_Nacht,N,11,2"]}</td>
    </tr>
    <tr>
      <td>Standardabweichung Schallleistungspegel (db(A))</td>
      <td>{wkaInfo["Wka_ID,C,15"]}</td>
    </tr>
  </table> ;
}

export default DetailsPage;