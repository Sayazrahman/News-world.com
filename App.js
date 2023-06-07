import "./App.css";
import React, { Component } from "react";
import Navbar from "../src/Components/Navbar";
import News from "./Components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <>
        <div>
          
          <Router>
            <Navbar />
            <Routes>
             <Route  path= ""element={<News  pageSize={7} country='in'/>}> 
               </Route> 
              <Route path="/Home" element={<News key="Home" pageSize={7} country='in' category='General' />}>
              </Route>
              <Route path="/Business" element={<News key="Business" pageSize={7} country='in' category='Business' />}>
              </Route>
              <Route path="/Entertainment" element={<News key="Entertainment" pageSize={7} country='in' category='Entertainment' />}>
              </Route>
              <Route path="/Health" element={<News key="Health" pageSize={7} country='in' category='Health' />}>
              </Route>
              <Route path="/General" element={<News key="General" pageSize={7} country='in' category='General' />}></Route>
              <Route path="/Science" element={<News key="Science" pageSize={7} country='us' category='Science' />} >
              </Route>
              <Route path="/Sports" element={<News key="Sports" pageSize={7} country='in' category='Sports' />}>
              </Route>
              <Route path="/Technology" element={<News key="Technology" pageSize={7} country='in' category='Technology' />}>
              </Route>
            </Routes>
          </Router>
          
        </div>
      </>
    );
  }
}
