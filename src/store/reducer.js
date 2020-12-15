
import { ADD_COUNTER, GET_POSTS } from "../utils/constants";
import {addCounter, getPosts} from "./actions.js";

const initialState ={
  counter : 0,
  posts: {}
}

const reducer = (state = initialState, action ) => {
  console.log(action.payload)
  switch(action.type){
    case ADD_COUNTER:
      return Object.assign({}, state, {counter: action.payload})
    case GET_POSTS:
      return Object.assign({}, state, {posts: action.payload})
    default:  return state;
  }

}

export default reducer;

export function mapStateToProps(state) {
  return state;
}

export function mapDispatchToProps(dispatch){
  return {
    addCounter: counter => dispatch(addCounter(counter)),
    getPosts: posts => dispatch(getPosts(posts))
  }
}