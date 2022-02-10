import React from 'react';
import ReactDOM from 'react-dom';
import '@twicpics/components-demo-wrapper/wrapper/_/style.css';
import './index.css';
import App from './App';
import { installTwicPics } from "@twicpics/components/react";
import "@twicpics/components/style.css";

installTwicPics( {
    "domain": `https://demo.twic.pics`,
    "anticipation": 0.5,
    "step": 100,
} );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

