import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBuses } from "../../slicer/BusRedux/busesSlice";

const Card = () => {
  const dispatch = useDispatch();
  const busState = useSelector((state) => state?.bus?.Bus);

  useEffect(() => {
    dispatch(getBuses());
  }, []);
  return (
    <>
      {busState &&
        busState?.map((data, index) => {
          return (
            <div
              className="flex h-44 mt-4 rounded-[10px] border-2 border-solid border-[rgb(169,169,169)]"
              key={index}
            >
              <div className="flex flex-col justify-between w-[950px] p-5 border-r-2 border-r-[rgb(169,169,169)] border-solid">
                <div className="flex flex-col gap-2.5">
                  <div className="flex gap-2.5">
                    <h3>{data?.busName}</h3>
                    <p
                      style={{
                        backgroundColor: "green",
                        borderRadius: "10px",
                        padding: "2px",
                        color: "white",
                      }}
                    >
                      ⭐4.5
                    </p>
                    <p> Rating</p>
                  </div>
                  <div className="flex gap-2.5">
                    <p>{data?.category}</p>
                    <p>|</p>
                    <p>24 Seates Left</p>
                    <p>|</p>
                    <p>0 windows Left</p>
                  </div>
                  <div className="flex gap-2.5">
                    <p>{data?.startTime}</p>
                    <p> --- 07 hrs 58 min ---</p>
                    <p>{data?.EndTime}</p>
                  </div>
                </div>
                <div className="flex gap-[30px] text-[blueviolet]">
                  <p>{data.animeties_list[0]}</p>
                  <p>{data.animeties_list[1]}</p>
                  <p>{data.animeties_list[2]}</p>
                  <p>{data.animeties_list[3]}</p>
                  <p>{data.animeties_list[4]}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2.5 w-[200px]">
                <p>Trip Cost</p>
                <p>Price</p>
                <h2>₹ {data?.busFare}</h2>
                <button className="text-[white] bg-[#e6883b] text-xl px-[15px] py-[5px] rounded-[5px] border-[none]">
                  View Seat
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Card;
