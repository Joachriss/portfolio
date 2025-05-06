import { createContext, ReactNode, useContext, useState } from "react";

interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);


export const ThemeContextProvider = ({children}: {children: ReactNode}) => {
    const isWindowsTheme= window.matchMedia("(prefers-color-scheme: dark)");
    let presentTheme = isWindowsTheme.matches ? "dark" : "light";
    const htmlTag = document.getElementsByTagName("html")[0];

    const [theme,setTheme] = useState<any>(presentTheme);
    htmlTag.setAttribute("class", theme);

    const toggleTheme = () => {
        if (theme === "dark") {
            htmlTag.setAttribute("class", "light");
            setTheme("light");
        }
        else {
            htmlTag.setAttribute("class", "dark");
            setTheme("dark");
        }
    }

    return(
        <ThemeContext.Provider value={{theme,setTheme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () =>{
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }
    return context;
}