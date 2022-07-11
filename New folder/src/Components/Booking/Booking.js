import React, { useState } from "react";
import Lastpage from "../Lastpage/Lastpage";
import { Link, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Booking() {
  let history = useHistory();
  const [msg, setMsg] = useState("");
  const [adult, setAdult] = useState("");
  const [children, setChildren] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const handleChange = (event) => {
    setMsg(event.target.value);
    // let itemn = event.target.value;
    console.log(msg)
  };
  const handleTimeChange = (event) => {
    setDate(event.target.value);
    let item = event.target.value
  };
  const handleClick = (event) => {
    event.preventDefault();

    console.log("clicked", msg);
  };

  const handleTimeClick = () => {
    // setTime(event.target.value);
  };
  const handleChildChange = (event) => {
    setAdult(event.target.value);
    let item1 = event.target.value
  };
  const handleEmailChange = (event) => {
    setChildren(event.target.value);
    let item2 = event.target.value
  };
  const handlePhoneChange = (event) => {
    setEmail(event.target.value);
    let item3 = event.target.value
  };
  const handleAdultChange = (event) => {
    setPhone(event.target.value);
    let item5 = event.target.value
  };
  function handleLastClick() {
    // history.push("/last");
    history.push('/last',{params:'Hello World'})

  }
  return (
    <>
      <div
        className="main_div"
        style={{
          border: "1px solid black",
          height: "350px",
          width: "400px",
          margin: "auto",
          borderRadius: "10px",
          marginTop: "30px",
          backgroundColor: "rgb(157, 212, 234)",
          color: "white",
          border: "none",
          boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <h5 className="con_text">Confirm your appoinment</h5>
        <br />
        <h5>Name:</h5>
        <input
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={msg}
          autoComplete="off"
          placeholder="Enter your name"
        />

        <br />
        <h5>Date & time: </h5>
        <input
          onChange={handleTimeChange}
          type="datetime-local"
          id="Test_DatetimeLocal"
        />

        <br />
        <h5>Adults:</h5>
        <input
          type="number"
          placeholder="no of adults"
          onChange={handleAdultChange}
        ></input>
        {/* <h2>Adults: {adult}</h2> */}
        <br />
        <h5>Children:</h5>
        <input
          type="number"
          placeholder="no of children"
          onChange={handleChildChange}
        ></input>
        {/* <h2>Children: {children}</h2> */}
        <br />
        <h5>Email:</h5>
        <input
          type="text"
          placeholder="Enter your email"
          onChange={handleEmailChange}
        ></input>
        {/* <h2>Email: {email}</h2> */}
        <br />
        <h5>Phone:</h5>
        <input
          type="text"
          placeholder="Phone no"
          onChange={handlePhoneChange}
        ></input>
        {/* <h2>Phone no: {phone}</h2> */}
        <br />
        <button onClick={handleLastClick}>Submit</button>
      </div>
      {/* <Lastpage msg = {msg}/> */}

      {/* </div> */}
    </>
  );
}
