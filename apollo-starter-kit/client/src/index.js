import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter } from 'react-router-dom'
import { Provider} from 'react-redux';
import container from './reducers/container';
import store from './store';
import AppRoutes from './routes';

ReactDOM.render((
        <Provider store={store}>         
              <AppRoutes/>        
         </Provider>
      ) , document.getElementById("index")
);

