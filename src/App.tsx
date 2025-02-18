import './App.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Layout from './Layout';
import Badges from './routes/Badges';
import Banners from './routes/Banners';
import Cards from './routes/Cards';
import Testimonials from './routes/Testimonials';
import ToastPopups from './routes/ToastPopups';
import Tooltips from './routes/Tooltips';
import NotFound from './routes/NotFound';
import Home from './routes/Home';
import { createContext, useState } from 'react';

interface ThemeContext {
  theme: string;
  toggleTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContext>({ theme: "light", toggleTheme: () => { } });

const App: React.FC = () => {

  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || systemTheme
  );

  const htmlElement = document.querySelector("html");

  const applyTheme = (theme: string) => {
    localStorage.setItem("theme", theme);

    if (htmlElement) {
      htmlElement.setAttribute("data-theme", theme === "system" ? systemTheme : theme);
    }

  };

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  // Apply the initial theme
  applyTheme(theme);

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (theme === "system") {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
      applyTheme(newTheme);
    }
  });

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="badges" element={<Badges />} />
      <Route path="banners" element={<Banners />} />
      <Route path="cards" element={<Cards />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="toasts" element={<ToastPopups />} />
      <Route path="tooltips" element={<Tooltips />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  )
}

export default App
export { ThemeContext }
