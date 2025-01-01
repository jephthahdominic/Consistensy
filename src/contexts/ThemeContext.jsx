import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({children}){
    const [theme, setTheme] = useState("light");
    function changeTheme() {
        if(theme === "light") setTheme('dark');
        if(theme=== "dark") setTheme('light');
    }

    return (
        <ThemeContext.Provider value={{theme, setTheme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme(){
    const context = useContext(ThemeContext)
    return context
}
export {ThemeProvider, useTheme}