import React, { useEffect } from "react";
import Select from "react-select";
import DatePicker from "react-horizontal-datepicker";
import Card from "./Card";
import "./Bus.css";

const Bus = () => {
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
      ),
      value: "0 to 2",
    },
  ];
  const onSelectedDay = (d) => {
    console.log(d);
  };
  return (
    <>
      <div className="mani_div">
        <div className="flex gap-8 p-8">
          <div className="flex w-[20vw] flex-col gap-5">
            <div className="flex justify-between gap-5 p-2.5 border-2 border-solid border-[rgb(169,169,169)]">
              <h4>Filter</h4>
              <h4>Clear All</h4>
            </div>
            <div className="flex flex-col p-2.5 border-2 border-solid border-[rgb(169,169,169)]">
              <div className="flex flex-col gap-[15px] mt-4 pb-8 border-b-2 border-b-[rgb(169,169,169)] border-solid">
                <div>
                  <h4>Departure Time</h4>
                </div>
                <div>
                  <input type="checkbox" value="Moining Session" />
                  <span style={{ paddingLeft: "15px" }}>Moining Session</span>
                </div>
                <div>
                  <input type="checkbox" value="Afternoon Session" />
                  <span style={{ paddingLeft: "15px" }}>Afternoon Session</span>
                </div>
                <div>
                  <input type="checkbox" value="Evening Session" />

                  <span style={{ paddingLeft: "15px" }}>Evening Session</span>
                </div>
              </div>
              <div className="flex flex-col gap-[15px] mt-4 pb-8 border-b-2 border-b-[rgb(169,169,169)] border-solid">
                <div>
                  <h4>Arrival Time</h4>
                </div>
                <div>
                  <input type="checkbox" value="Moining Session" />
                  <span style={{ paddingLeft: "15px" }}>Moining Session</span>
                </div>
                <div>
                  <input type="checkbox" value="Afternoon Session" />
                  <span style={{ paddingLeft: "15px" }}>Afternoon Session</span>
                </div>
                <div>
                  <input type="checkbox" value="Evening Session" />

                  <span style={{ paddingLeft: "15px" }}>Evening Session</span>
                </div>
              </div>
              <div className="flex flex-col gap-[15px] mt-4 pb-8 border-b-2 border-b-[rgb(169,169,169)] border-solid">
                <div>
                  <h4>Pickup Point</h4>
                </div>
                <div className="">
                  <Select options={aquaticCreatures} />
                </div>
              </div>
              <div className="flex flex-col gap-[15px] mt-4 pb-8 border-b-2 border-b-[rgb(169,169,169)] border-solid">
                <div>
                  <h4>Drop Point</h4>
                </div>
                <div className="">
                  <Select options={aquaticCreatures} />
                </div>
              </div>
              <div className="flex flex-col gap-[15px] mt-4 pb-8 border-b-2 border-b-[rgb(169,169,169)] border-solid">
                <div>
                  <h4>Bus Rating</h4>
                </div>
                <div className="">
                  <Select options={rating} />
                </div>
              </div>
              <div className="flex flex-col gap-[15px] mt-4 pb-8">
                <h4>Bus Operator</h4>
                <Select options={objectArray} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[15px] w-[80vw]">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bus;
