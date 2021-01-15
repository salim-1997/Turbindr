import React , {useState} from "react";
import FirstStat from "./stats/FirstStat";
import SecondStat from './stats/SecondStat';
import ThirdStat from './stats/ThirdStat';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function StatisticsPage() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [fromDate, setFromtDate] = useState(null);
    const [toDate, setToDate] = useState(null);
 
    return <div style={{ textAlign: "center" }}>
 <DatePicker style={{margin:"0, 10px"}}
 selected ={startDate}
 onChange = {date => setStartDate(date)} />
 <DatePicker 
 selected ={endDate}
 onChange = {date => setEndDate(date)} />
        <FirstStat />
        <SecondStat fromDate={startDate} toDate={endDate}/>
        <ThirdStat />
    </div>
};

export default StatisticsPage;

/*<form  noValidate>
<TextField 
id="startDate"
label="von.."
type="date"
defaultValue={startDate}
onChange={handleChangeStart}
InputLabelProps={{
  shrink: true,
}}
/>
<TextField
id="endDate"
label="..bis"
type="date"
defaultValue={endDate}
onChange={handleChangeEnd}
InputLabelProps={{
  shrink: true,
}}
/>
<Button variant="outlined" onClick={handleClick}>Filter-></Button>
</form>*/