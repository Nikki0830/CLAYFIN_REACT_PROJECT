import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "./Actions";

const initialState = {
  userDetails: {
    name: null,
    datetime: null,
    adult: null,
    children: null,
    email: null,
    phone: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { count: state.count + 1 };
  }
};
