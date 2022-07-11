import {createStore} from "react-redux"
import { useReducer } from "./Reducer"
export const Store = createStore(useReducer)