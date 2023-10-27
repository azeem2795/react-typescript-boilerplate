import { combineReducers } from 'redux';
import loginReducer from './auth.reducer';

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
