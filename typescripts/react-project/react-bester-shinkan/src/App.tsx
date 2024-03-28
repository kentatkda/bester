import './App.css';
import EventsDetails from './components/EventsDetails';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // ScrollRestoration
} from "react-router-dom";
import Home from './components/Home';
import Contacts from './components/Contacts';
// import TennisDetails from './components/TennisDetails';
import BesterDetails from './components/BesterDetails';
import GalleryDetails from './components/GalleryDetails';
import Shinkan from './components/Shinkan';
// import { useLocation,  useEffect} from 'react';
// import { AnimatePresence } from 'framer-motion';
import './style.css';

// const Layout = ({children}) => {
//   return (
//     <div>
//       {/* ... */}
//       {children}
//       <ScrollRestoration />
//     </div>
//   );
// }

function App() {
  return (
    <Router>
        {/* <Layout/> */}
        <div className="App">
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/events" element={ <EventsDetails /> } />
            <Route path="/contacts" element={ <Contacts /> } />
            {/* <Route path="/tennis" element={ <TennisDetails /> } /> */}
            <Route path="/bester" element={ <BesterDetails /> } />
            <Route path="/gallery" element={ <GalleryDetails /> } />
            <Route path="/shinkan" element={ <Shinkan /> } />
          </Routes>
        </div>
    </Router>
  );
}


export default App;
