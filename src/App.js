import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Home from './mypages/home.jsx';
import Show from './mypages/show.jsx';
import FriendsList from './firebase/myfirstdata.js';
import Loginwithgoogle from './firebase/loginwithgoogle.js';
import Myhome from './mypages/firsthomepage.jsx';
import Pagenotfound from './components/pagenotfound.jsx';


function App() {


  return (


    <BrowserRouter>
      <Routes>

      <Route path='/Home' element={<Home />}></Route>
      <Route path='/:id' element={<Show />}></Route>
      <Route path='/' element={<Myhome />}></Route>
        
        
        {/* <Route path='/Registration' element={<Registration />}>
            <Route path="Nesteddivision" element={<Nesteddivision />} />
            <Route path="Nestedunit" element={<Nestedunit />} />
        </Route>
        
       */}

      
       <Route path='/* ' element={<Pagenotfound />}></Route> 

      </Routes>

    </BrowserRouter>

  );
}

export default App;




