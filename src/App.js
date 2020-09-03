import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from 'firebase'
import {firebaseConfig} from './firebaseConfig'

function App() {

  useEffect(()=>{
    getProjects()
  }, [])

  const getProjects=()=>{
   const app= firebase.initializeApp(firebaseConfig);
   firebase.analytics();
   const database=app.database().ref()
   database.on('value', snap=>{
    console.log('data: ', snap.val)
   })
   
  }
  return (
    <div>
      hi!
    </div>)
}

export default App;
