import React from 'react';
import logger from "redux-logger";
import ReactDOM from 'react-dom';
import './index.css';
import App from "./containers/AppBoot/index";
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import RootReducer from "./store/reducers";
import RootSaga from "./store/sagas";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(RootSaga);
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
     <App />
  </Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
