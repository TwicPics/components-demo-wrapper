import App from './App';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { installTwicPics } from "@twicpics/components/react";
import "@twicpics/components/style.css";
import '@twicpics/components-demo-wrapper/style.css';
import './index.css';

installTwicPics( {
    "domain": `https://demo.twic.pics`,
    "anticipation": 0.5,
    "step": 100,
} );

const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
      <App />
  );

