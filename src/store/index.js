import { createStore, combineReducers } from 'redux';
import { subTitleReducer } from './subTitleReducer.js';
import { titleReducer } from './titleReducer.js';

const rootReducer = combineReducers({
   title: titleReducer,
   subTitle: subTitleReducer
})

export const store = createStore(rootReducer)