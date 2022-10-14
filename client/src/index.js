import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import UserStore from "./store/UserStore";
import SuperheroStore from "./store/SuperheroStore";

export const Context = createContext(null)
  
ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        superhero: new SuperheroStore(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);
//
