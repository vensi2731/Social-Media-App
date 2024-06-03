//useState is react hook for managing state in functional components in below my code i have 
//darkMode is a state variable that value retrived from 'lo9calstorage' and setDarkMode is fn used to update the'darkmode'
import { useState, createContext, useEffect } from "react";
export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false
    );

    //this function that toggles the value of 'darkMode'
    const toggle = () => {
        setDarkMode(!darkMode);
    };

    //effect runs whenevr the 'darkMode' state changes and update the 'localstorage' with the current value of 'darkMode' so that after 
    //refresh user's prefrence persists 
    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggle }}>
            {children}
        </DarkModeContext.Provider>
    );
};