import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './rootreducer'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 0,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
 };

const persistedReducer = persistReducer(persistConfig, rootReducer) 


 export const store = createStore(
  persistedReducer,
  {},
    composeEnhancers(applyMiddleware(thunk)),
  );

export const persistor = persistStore(store)