import React, { Suspense,lazy } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import About from './About';
import { Routes,Route } from 'react-router-dom';
import Mynav from './Mynav';
import Mobile from "./Mobile";
import Mytv from './Mytv';
import Mylaptop from './Mylaptop'
import Myservicepage from './Myservicepage';
import Landingpage from './Landingpage';
import Myaxios from './Myaxios';
import Detailspage from './Detailspage';
import Myform from "./Myform";
import Myerrorpage from "./MyErrorpage";
import Mycontext from "./Mycontext";
import Mycharts from "./Mycharts";
import Myfatchapi from "./Myfatchapi";
const Myloader=lazy(()=> import('./Myloader'));
const Mylazyloadingpage=lazy(()=> import('./Mylazyloadingpage'));

 
function App() {
  return (
    <>
    <Mynav/>
  <Routes>
      <Route path='' element={<Landingpage/>}/>
      <Route path='about' element={<About/>}/>
      <Route path="form" element={<Myform/>}/>
      <Route path="mycontext" element={<Mycontext/>}/>
      <Route path="mycharts" element={<Mycharts/>}/>


      <Route path='service' element={<Myservicepage/>}>
          <Route path='mobile' element={<Mobile/>}/>
          <Route path='tv' element={<Mytv/>}/>
          <Route path='laptop' element={<Mylaptop/>}/>
          <Route path='axios' element={<Myaxios/>}/>
          <Route path='fetch' element={<Myfatchapi/>}/>
          <Route path='axios/:id' element={<Detailspage/>}/>

      </Route>

      <Route path="mylazy" element={
       <Suspense fallback="{<Myloader/>}">
          <Mylazyloadingpage/>
      </Suspense>
      }/>

      
      <Route path="*" element={<Myerrorpage/>}/>

  </Routes> 
    </>
  ); 
}

export default App;
