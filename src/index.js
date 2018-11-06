import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { compose } from "redux";
import numbReducer from "./store/reducers/numbers";

const rootReducer = combineReducers({
  rootNumbs: numbReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const centralStore = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={centralStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
