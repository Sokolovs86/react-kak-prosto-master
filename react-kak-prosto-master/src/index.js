import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
      <App
        // state={state}
        // dispatch={store.dispatch.bind(store)}
        // store={store} 
      />
      {/* addPost={ (message) => { alert("IIIIUUUUUU" + message)}} /> тупая компонента */}
    </Provider>
    </BrowserRouter>, document.getElementById("root")
  );

// import Dialogs from './components/Dialogs/Dialogs';

// addPost('Niger, Hi))');


reportWebVitals();
