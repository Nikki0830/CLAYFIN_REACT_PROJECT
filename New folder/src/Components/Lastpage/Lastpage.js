import React from "react";

export default function Lastpage({msg}) {
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          height: "400px",
          width: "400px",
          margin: "auto",
        }}
      >
        {/* <h1>{props.name}</h1> */}
        <h5>Your booking confirmed</h5>
        <p>{msg}</p>
      </div>
    </>
  );
}
