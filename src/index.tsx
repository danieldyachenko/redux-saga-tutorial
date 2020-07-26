import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';
import {store} from "./store/store";
import {Provider as StoreProvider} from "react-redux";

ReactDOM.render(
    <StrictMode>
        <StoreProvider store={store}>
            <App/>
        </StoreProvider>
    </StrictMode>,
    document.getElementById("root")
);