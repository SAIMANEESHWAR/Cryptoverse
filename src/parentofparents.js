import React, { createContext, useState } from 'react';

import { useEffect } from 'react';
// Create the context
export const AppContext = createContext();
// Create the context provider component
export const AppProvider = ({ children }) => {

    const [themecolor,setthemecolor]=useState(true);
    
	const contextValues = {
        themecolor,setthemecolor
        };
    
        return (
        <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
        );
    };
    