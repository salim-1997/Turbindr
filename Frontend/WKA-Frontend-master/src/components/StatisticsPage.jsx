import React, { useState } from "react";
import FirstStat from "./stats/FirstStat";
import SecondStat from "./stats/SecondStat";
import ThirdStat from "./stats/ThirdStat";
import DatePicker from "react-datepicker";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "react-datepicker/dist/react-datepicker.css";
import "./StatisticsPage.css";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
//import "pure-react-carousel/dist/react-carousel.es.css";

function StatisticsPage() {
  const [startDate, setStartDate] = useState(new Date(2005, 1, 1));
  const [endDate, setEndDate] = useState(new Date(2015, 1, 1));
  const [value, setValue] = useState("inBetriebsnahme");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="inBetriebsnahme"
          control={<Radio />}
          label="in Betriebsnahme"
        />
        <FormControlLabel
          value="genehmigt"
          control={<Radio />}
          label="genehmigt"
        />
      </RadioGroup>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />

      <Carousel interval={7000}>
        <Carousel.Item>
          <FirstStat />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <SecondStat fromDate={startDate} toDate={endDate} status={value} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ThirdStat />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

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
