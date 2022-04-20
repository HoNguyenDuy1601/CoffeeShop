import React from "react";
import { useHistory } from "react-router-dom";

const CardReview = (props) => {
  const history = useHistory();
  return (
    <div
      className={`relative rounded-lg p-3 text-black shadow-xl min-w-[250px] min-h-[250px] mt-[200px] mb-[100px] mx-auto bg-white sm:w-[300px]`}
    >
      <img
        alt=""
        src={props.img}
        className="rounded-lg cursor-pointer absolute -top-[25%] object-cover"
      ></img>
      <div className="flex flex-col flex-col-1 mt-[60%]">
        <h3 className="text-xl font-bold mb-3 max-w-[250px] h-[50px]">
          {props.name}
        </h3>
        <span className="h-[300px]">{props.review}</span>
        <button
          className="py-3 px-6 text-sm font-medium bg-orange-400 rounded-lg text-white mt-[20px] mb-[30px] hover:bg-orange-300 "
          onClick={() => {
            history.push("/testimonial");
            console.log("Duy");
          }}
        >
          Tìm hiểu thêm
        </button>
      </div>
    </div>
  );
};

export default CardReview;
