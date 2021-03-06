import { FETCH_LOSER } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_LOSER:
      return { ...state, ...action.payload.data  };
    default:
      return state;
  }
}
