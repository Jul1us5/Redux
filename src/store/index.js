import { createStore, combineReducers, applyMiddleware } from 'redux';
import { subTitleReducer } from './subTitleReducer.js';
import { titleReducer } from './titleReducer.js';
import { apiDataReducer } from './apiDataReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
   title: titleReducer,
   subTitle: subTitleReducer,
   apiData: apiDataReducer
})

export const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(thunk)) )