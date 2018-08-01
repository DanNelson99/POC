import { SET_CONTAINER_DATA } from "../constants/index";

const initState = {
  containers: [],
 }

export default (state = initState, action) => {
    switch (action.type) {
      case SET_CONTAINER_DATA:
        return Object.assign({}, state, action.payload.data)
      default:
        return state;
    }
}