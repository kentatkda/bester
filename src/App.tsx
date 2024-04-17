import './App.css';
import {
  Route,
  Routes,
  useLocation
} from "react-router-dom"
import Home from './pages/Home.tsx'
import Contact from './pages/Contact.tsx';
import Shinkan from './pages/Shinkan.tsx';
import Events from './pages/Events.tsx';
import Gallery from './pages/Gallery.tsx';
import { useEffect } from 'react';
import './style.css';
import { AnimatePresence } from 'framer-motion';
const APP_NAME: String = "bester";

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}



const App = () => {
  const location = useLocation()


  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <ScrollToTop/>
        <Routes location={ location } key={location.pathname}>
          <Route path={APP_NAME + '/'} element={ <Home /> }/>
          <Route path={APP_NAME + "bester/events"} element={ <Events /> } />
          <Route path={APP_NAME + "bester/contacts"} element={ <Contact /> } />
          <Route path={APP_NAME + "bester/gallery"} element={ <Gallery /> } />
          <Route path={APP_NAME + "bester/shinkan"} element={ <Shinkan /> } />
        </Routes>
      </AnimatePresence>
    </div>
  );
}


export default App;
