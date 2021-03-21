import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import currentUser from './auth'
import users from './users'







const rootReducer = combineReducers({
  currentUser,
  users, 

  //ADD ADDITIONAL SLICES OF STATE HERE 
});

export default rootReducer