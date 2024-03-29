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
import './style.css';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <div className="App">
        <Routes location={ location } key={location.pathname}>
          <Route path="/" element={ <Home /> }/>
          <Route path="/events" element={ <Events /> } />
          <Route path="/contacts" element={ <Contact /> } />
          {/* <Route path="/tennis" element={ <TennisDetails /> } /> */}
          <Route path="/gallery" element={ <Gallery /> } />
          <Route path="/shinkan" element={ <Shinkan /> } />
        </Routes>
      </div>
    </AnimatePresence>
  );
}


export default App;
