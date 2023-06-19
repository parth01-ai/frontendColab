import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Select from "react-select";
import DatePicker from "react-horizontal-datepicker";
import "./bues.css";
import Card from "./Card";

const Buses = () => {
  const objectArray = [
    {
      label: (
        <label>
          <input type="checkbox" onChange={() => {}} />
          <span style={{ paddingLeft: "15px" }}>intrCity Bus</span>
        </label>
      ),
      value: "intrCity Bus",
    },
    {
      label: (
        <label>
          <input type="checkbox" onChange={() => {}} />
          <span style={{ paddingLeft: "15px" }}>Safar Bus</span>
        </label>
      ),
      value: "Safar Bus",
    },
    {
      label: (
        <label>
          <input type="checkbox" onChange={() => {}} />
          <span style={{ paddingLeft: "15px" }}>Zing Bus</span>
        </label>
      ),
      value: "Zing Bus",
    },
  ];

  const aquaticCreatures = [
    {
      label: (
        <label>
          <input type="checkbox" onChange={() => {}} />
          <span style={{ paddingLeft: "15px" }}>Kolkata</span>
        </label>
      ),
      value: "Kolkata",
    },
    {
      label: (
        <label>
          <input type="checkbox" onChange={() => {}} />
          <span style={{ paddingLeft: "15px" }}>Mumbai</span>
        </label>
      ),
      value: "Mumbai",
    },
    {
      label: (
        <label>
          <input type="checkbox" onChange={() => {}} />
          <span style={{ paddingLeft: "15px" }}>Bangalore</span>
        </label>
      ),
      value: "Bangalore",
    },
  ];
  const rating = [
    {
      label: (
        <label>
          <input type="checkbox" onChange={() => {}} />
          <span style={{ paddingLeft: "15px" }}>4 star or more</span>
        </label>
      ),
      value: "4+",
    },
    {
      label: (
        <label>
          <input type="checkbox" onChange={() => {}} />
          <span style={{ paddingLeft: "15px" }}>3 star or more</span>
        </label>
      ),
      value: "3+",
    },
    {
      label: (
        <label>
          <input type="checkbox" onChange={() => {}} />
          <span style={{ paddingLeft: "15px" }}>0 to 2 star or more</span>
        </label>
      ).key,
      value: "0 to 2",
    },
  ];
  const onSelectedDay = (d) => {
    console.log(d);
  };
  return (
    <>
      <NavBar />
      <div>
        <div className="mani_div">
          <div className="buses_div">
            <div className="filter_div">
              <div className="Tital_div">
                <h4>Filter</h4>
                <h4>Clear All</h4>
              </div>
              <div className="filter_functions">
                <div className="Departure_Time">
                  <div>
                    <h4>Departure Time</h4>
                  </div>
                  <div>
                    <input type="checkbox" value="Moining Session" />
                    <span style={{ paddingLeft: "15px" }}>Moining Session</span>
                  </div>
                  <div>
                    <input type="checkbox" value="Afternoon Session" />
                    <span style={{ paddingLeft: "15px" }}>
                      Afternoon Session
                    </span>
                  </div>
                  <div>
                    <input type="checkbox" value="Evening Session" />

                    <span style={{ paddingLeft: "15px" }}>Evening Session</span>
                  </div>
                </div>
                <div className="Arrival_Time">
                  <div>
                    <h4>Arrival Time</h4>
                  </div>
                  <div>
                    <input type="checkbox" value="Moining Session" />
                    <span style={{ paddingLeft: "15px" }}>Moining Session</span>
                  </div>
                  <div>
                    <input type="checkbox" value="Afternoon Session" />
                    <span style={{ paddingLeft: "15px" }}>
                      Afternoon Session
                    </span>
                  </div>
                  <div>
                    <input type="checkbox" value="Evening Session" />

                    <span style={{ paddingLeft: "15px" }}>Evening Session</span>
                  </div>
                </div>
                <div className="Pickup_Point">
                  <div>
                    <h4>Pickup Point</h4>
                  </div>
                  <div className="">
                    <Select options={aquaticCreatures} />
                  </div>
                </div>
                <div className="Drop_Point">
                  <div>
                    <h4>Drop Point</h4>
                  </div>
                  <div className="">
                    <Select options={aquaticCreatures} />
                  </div>
                </div>
                <div className="Bus_rating">
                  <div>
                    <h4>Bus Rating</h4>
                  </div>
                  <div className="">
                    <Select options={rating} />
                  </div>
                </div>
                <div className="bus_operator">
                  <h4>Bus Operator</h4>
                  <Select options={objectArray} />
                </div>
              </div>
            </div>
            <div className="busbooking_div">
              <div className="calander_div">
                <DatePicker
                  className="date"
                  getSelectedDay={onSelectedDay}
                  labelFormat={"MMMM yyyy"}
                  endDate={51}
                  // selectDate={new Date("2020-04-30")}
                  color={"#374e8c"}
                />
              </div>
              <div className="card_main">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Buses;
