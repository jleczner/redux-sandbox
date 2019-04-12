import {GET_ALL_PARTS, RECEIVE_ALL_PARTS} from './partsActions';

const initialState = {
	isFetching: false,
	parts: []
};

const partsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PARTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_ALL_PARTS:
      return {
        ...state,
        isFetching: false,
        parts: action.parts
      };
    default:
      return state;
  }
};

export default partsReducer;