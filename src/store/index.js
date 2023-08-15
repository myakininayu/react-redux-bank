import { createStore, combineReducers } from 'redux';
import { cashReducer } from './reducers/cashReducer';
import { customerReducer } from './reducers/customerReducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
    cashReducer,
    customerReducer
});

export const store = createStore(rootReducer, composeWithDevTools());