import { combineReducers } from 'redux';
import playerOneReducer from './reducer_playerOneInfo';
import playerTwoReducer from './reducer_playerTwoInfo';
import battleReducer from './reducer_currentBattle';
import winnerReducer from './reducer_winner';
import loserReducer from './reducer_loser';

const rootReducer = combineReducers({
      playerOneInfo: playerOneReducer,
      playerTwoInfo: playerTwoReducer,
      currentBattle: battleReducer,
      winner: winnerReducer,
      loser: loserReducer
});

export default rootReducer;
