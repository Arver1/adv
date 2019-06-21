import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';
import authReducer, { modulName as authModule } from '../ducks/auth';

export default (hist) => combineReducers({
  router: connectRouter(hist),
  form,
  [authModule]: authReducer
})
