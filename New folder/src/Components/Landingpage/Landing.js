import React from "react";

import Text from "../Text/Text";
import { Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import "./Landing.css";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "../Home/Home";
import Slideshow from "./ImgSlider";
import Videobox from "../Videobox/Videobox";
import Setting from "../Setting/Setting";
import IEighteen from "../I18implement/IEighteen";
import Booking from "../Booking/Booking";
import IEigntneen2 from "../I18implement/IEigntneen2";
import { useTranslation } from "react-i18next";
import Lastpage from "../Lastpage/Lastpage";
// import { Translator } from "../Translation/Translator";
// import {i18n} from './Translations/I18n';

export default function Landing(props) {
  const { t } = useTranslation();
  console.log(props);
  return (
    <>
      {/* Roiuting for all contents in my lanf=ding page */}
      <div className="container">
        {/* <div className="button_box"> */}
        <div className="nav_box">
          <h2
            className="text"
            style={{
              color: "white",
              fontSize: "40px",
              fontFamily: "cursive",
            }}
          >
            {props.title}
          </h2>
          <Setting />
          {/* <Translator/> */}
          <Link to="/login">
            {/* Login button */}
            <button type="button" className="btn btn-light">
              {t("Login")}
            </button>
          </Link>
          <Link to="/last"></Link>
        </div>

        <Switch>
          <Route exact path="/">
            <Videobox />
          </Route>
          <Route exact path="/login">
            <Login />
            {/* <Videobox/> */}
          </Route>
          <Route exact path="/booking">
            <Booking />
            {/* <Videobox/> */}
          </Route>
          <Route
            exact
            path="/home"
            component={() => <Home authorized={false} />}
          />
          {/* <Route path="/setting">
                <Setting/>
            </Route> */}
          <Route exact path="/last">
            <Lastpage/>
            {/* <Videobox/> */}
          </Route>
        </Switch>
      </div>
      {/* </div> */}
    </>
  );
}
