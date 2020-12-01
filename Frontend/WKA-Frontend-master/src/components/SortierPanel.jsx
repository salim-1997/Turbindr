import React from "react";
import "./SortierPanel.css"

function SortierPanel(){
    return <div className="panel">
<label className="container">alle Windkraftanlagen
  <input type="checkbox" checked="checked" />
  <span className="checkmark"></span>
</label>

<label className="container">geplante Windkraftanlagen
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>

<label className="container">genehmigte Windkraftanlagen
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>

<label className="container">Windkraftanlangen in Betrieb
  <input type="checkbox" />
  <span className="checkmark"></span>
  </label>
    </div>
}
export default SortierPanel;