import React from "react";

export default function Footer(props) {
  return (
    <div className="row fixed-bottom mx-auto">
      <button
        className="btn btn-primary col-2"
        onClick={() => {
          props.resetQuantity();
        }}
      >
        Reset
      </button>
      <div className="col-2 mx-auto bg-dark text-white text-center">
      <span className="badge  col-4"><h5> ₹ {props.totalAmt}</h5></span>
      </div>
      <button className="btn btn-success col-2"> Pay Now </button>
    </div>
  );
}
