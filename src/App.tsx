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
import { ThemeProvider } from './context/Theme';

const App: React.FC = () => {

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
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
