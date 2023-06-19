import React from "react";

const Card = () => {
  return (
    <>
      <div className="card_div">
        <div className="card_section1">
          <div className="card_section11">
            <div className="card_section11-A">
              <h3>IntrCity Smart Bus</h3>
              <p style={{backgroundColor:"green" , borderRadius:"10px" , padding:"2px" ,color:"white"}}>⭐4.5</p>
              <p> Rating</p>
            </div>
            <div className="card_section11-B">
              <p>A/C sleeper ( 2 + 1 )</p>
              <p>|</p>
              <p>24 Seates Left</p>
              <p>|</p>
              <p>0 windows Left</p>
            </div>
            <div className="card_section11-C">
              <p> 22:45 , 16 Nov </p>
              <p> --- 07 hrs 58 min ---</p>
              <p>06:20, 17 Nov</p>
            </div>
          </div>
          <div className="card_section12">
            <p>Live Tracking</p>
            <p>Live Tracking</p>
            <p>Photos</p>
            <p>Available</p>
            <p>Preview</p>

          </div>
        </div>
        <div className="card_section2">
            <p>Trip Cost</p>
            <p>Price</p>
            <h2>₹ 899</h2>
            <button className="seatBtn">View Seat</button>
        </div>
      </div>
    </>
  );
};

export default Card;
