import {React,useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import AppRoute from './Components/Router';
import products from './Components/product.json'
function App() {
  return (
    <div className="App">  
       <AppRoute/>
    </div>
  );
}
export default App;
