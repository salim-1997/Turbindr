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
        className="radioGroup"
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          className="radioBox"
          value="inBetriebsnahme"
          control={<Radio />}
          label="in Betriebsnahme"
        />
        <FormControlLabel
          className="radioBox"
          value="genehmigt"
          control={<Radio />}
          label="genehmigt"
        />
      </RadioGroup>
      <div class="container_row">
        <DatePicker
          className="datePicker"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <DatePicker
          className="datePicker"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
        />
      </div>
      <Carousel interval={7000}>
        <Carousel.Item>
          <FirstStat />
        </Carousel.Item>
        <Carousel.Item>
          <SecondStat fromDate={startDate} toDate={endDate} status={value} />
        </Carousel.Item>
        <Carousel.Item>
          <ThirdStat />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default StatisticsPage;
