import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createBrowserHistory } from "history";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const history = createBrowserHistory();
const stores = configureStore(history);

ReactDOM.render(
  <Provider store={stores}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
