import { createContext } from "react";

const ThemeContext = createContext({
    themeMode: "dark",
    lightTheme: ()=>{},
    darkTheme: ()=>{}
});

export default ThemeContext