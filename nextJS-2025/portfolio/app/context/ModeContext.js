"use client";
import { createContext, useContext, useState } from 'react';

// Create the context with an initial state of false (light mode by default)
const ModeContext = createContext();

// The provider component that holds the state and provides it to the children
export const ModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false); // Default is light mode

    // Function to toggle the theme
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode); // Toggle between true (dark) and false (light)
    };


    /*   const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }; */

    return (
        <ModeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ModeContext.Provider>
    );
};

export const useMode = () => useContext(ModeContext);
