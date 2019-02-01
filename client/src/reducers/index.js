import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
//can also import reducer as import { reducer } from 'redux-form'
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  stream: streamReducer
})
