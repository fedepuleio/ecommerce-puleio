import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { initializeApp } from 'firebase/app';



    //const app = initializeApp(firebaseConfig);
const firebaseConfig = {
        apiKey: "AIzaSyAd3fsxDZwPwu8xKlkoGsg07SPERg6gW_I",
        authDomain: "ecommece-puleio.firebaseapp.com",
        projectId: "ecommece-puleio",
        storageBucket: "ecommece-puleio.appspot.com",
        messagingSenderId: "41599841691",
        appId: "1:41599841691:web:426c7dbaaf07a48f7e1d3e",
        measurementId: "G-S9RGPVNJ2H"
        };  

        initializeApp(firebaseConfig);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();