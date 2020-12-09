import React , {useState} from "react";
import Karte from "./Map";
import "./SortierPanel.css"

function SortierPanel(){
  const [radio, setRadio] = useState("gnehmigte");

  function handleChange(){
   if (radio === "gnehmigte"){
      return "im Gen.Verf.";
   }
   else if (radio === "geplante"){
      return "vor Inbetriebnahme";
   }
   else if (radio === "betrieb"){
     return "in Betrieb";
   }
   else{
     return "alle";
   }
  }
 

 return (<div>
<Karte status={handleChange()} />
<div className="panel">
<label className="container" >alle Windkraftanlagen
  <input type="radio" value="alle" checked={radio === "alle"} onChange={(e) => {
    setRadio(e.target.value);
    handleChange()} } />
  <span className="checkmark"></span>
</label>

<label className="container" >geplante Windkraftanlagen
  <input type="radio" value="geplante" checked={radio === "geplante"} onChange={(e) => {
    setRadio(e.target.value);
    handleChange()}} />
  <span className="checkmark"></span>
</label>

<label className="container" >genehmigte Windkraftanlagen
  <input type="radio" value="gnehmigte" checked={radio === "gnehmigte"} onChange={(e) => {
    setRadio(e.target.value);
    handleChange()}} />
  <span className="checkmark"></span>
</label>

<label className="container" >Windkraftanlangen in Betrieb
  <input type="radio" value="betrieb" checked={radio === "betrieb"} onChange={(e) => {
    setRadio(e.target.value);
    handleChange()}} />
  <span className="checkmark"></span>
</label>
</div>
</div> );
}
export default SortierPanel;
