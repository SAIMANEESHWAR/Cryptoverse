import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Home from './mypages/home.jsx';
import Show from './mypages/show.jsx'
function App() {


  return (


    <BrowserRouter>
      <Routes>

      <Route path='/' element={<Home />}></Route>
      <Route path='/:id' element={<Show />}></Route>
        
        
        {/* <Route path='/Registration' element={<Registration />}>
            <Route path="Nesteddivision" element={<Nesteddivision />} />
            <Route path="Nestedunit" element={<Nestedunit />} />
        </Route>
        
       */}

      
      {/* <Route path='/* ' element={<Pagenotfound />}></Route> */}

      </Routes>

    </BrowserRouter>

  );
}

export default App;




