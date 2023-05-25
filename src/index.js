import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA2iKt8yJZiuWbZfr8HEB5oGO-4qvmRsYE",
  authDomain: "eccomerce-reactjs-a473a.firebaseapp.com",
  projectId: "eccomerce-reactjs-a473a",
  storageBucket: "eccomerce-reactjs-a473a.appspot.com",
  messagingSenderId: "93153644016",
  appId: "1:93153644016:web:46998e1db4249ca9c1a135",
  measurementId: "G-37B1DE4CWG"
};

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
