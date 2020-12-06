
import { ADD_COUNTER } from "../utils/constants";
import {addCounter} from "./actions.js";

const initialState ={
  counter : 0
}

const reducer = (state = initialState, action ) => {
  console.log(action.payload)
  switch(action.type){
    case ADD_COUNTER:
      return Object.assign({}, state, {counter: action.payload})
    default:  return state;
  }

}

export default reducer;

export function mapStateToProps(state) {
  return state;
}

export function mapDispatchToProps(dispatch){
  return {
    addCounter: counter => dispatch(addCounter(counter))
  }
}