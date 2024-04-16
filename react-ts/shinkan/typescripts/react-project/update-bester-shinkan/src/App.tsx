import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom"
import { Contact }from './pages/Contact'
import { Shinkan }from './pages/Shinkan'
import { Gallery }  from "./pages/Gallery"
import { Events } from "./pages/Events"
import { Home } from "./pages/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route
          element={
            <div>
              <h1>Layout</h1>
              <Outlet />
            </div>
          }
        >
          <Route path="/" element= {<Home/>} />
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/shinkan" element={<Shinkan/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App