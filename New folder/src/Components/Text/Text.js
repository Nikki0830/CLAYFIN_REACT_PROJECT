import React, { Component } from "react";
import { Switch,Route } from "react-router-dom";
import Booking from "../Booking/Booking";
import Home from "../Home/Home";
import Landing from "../Landingpage/Landing";
import Lastpage from "../Lastpage/Lastpage";
// import { Translator } from "../Translation/Translator";
// import { Route, Link, Switch } from "react-router-dom";

export class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  render() {
    return (
      <div>
        <Landing title="Temple Booking" />
        
        {/* <Lastpage/> */}
   
      </div>
    );
  }
}

export default Text;
