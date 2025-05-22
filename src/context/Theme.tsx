import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";
type ThemeContextType = {
    theme: Theme;
    mode: "light" | "dark";
    toggleTheme: (mode: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const getStoredTheme = (): Theme => {
        if (typeof window === "undefined") return "light"; // Prevent SSR issues

        const storedTheme = localStorage.getItem("theme") as Theme | null;
        if (storedTheme) return storedTheme;

        return "system"; // Default to system theme
    };

    const [theme, setTheme] = useState<Theme>(getStoredTheme);
    const [mode, setMode] = useState<"light" | "dark">("light");

    useEffect(() => {
        if (theme === "system") {
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            document.documentElement.classList.toggle("dark", systemPrefersDark);
            setMode(systemPrefersDark ? "dark" : "light");
        } else {
            document.documentElement.classList.toggle("dark", theme === "dark");
            setMode(theme);
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = (mode: Theme) => {
        setTheme(mode);
    };

    return (
        <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};
