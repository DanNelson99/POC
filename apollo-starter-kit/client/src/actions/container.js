
import { SET_CONTAINER_DATA } from '../constants/index';


export const setConatainerData = (data) => {
  return dispatch => dispatch({
    type: SET_CONTAINER_DATA,
    payload: {
      data
    }
  })
}
