import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import userReducer from './user';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
