import { createStore, combineReducers } from 'redux';
import { subTitleReducer } from './subTitleReducer.js';
import { titleReducer } from './titleReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
   title: titleReducer,
   subTitle: subTitleReducer
})

export const store = createStore( rootReducer, composeWithDevTools() )