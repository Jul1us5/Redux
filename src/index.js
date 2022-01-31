import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";

const defaultState = {
   title: 'WEBPACK.Bundle 2.0',
   subTitle: 'Redux state management'
}

const reducer = (state = defaultState, action) => {
   switch (action.type) {
      case "ADD_TITLE":
         return { ...state, title: state.title = action.payload }
      case "ADD_SUB_TITLE":
         return { ...state, subTitle: state.subTitle = action.payload }
      default:
         return state;
   }
}

const store = createStore(reducer);

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById("app")
);
