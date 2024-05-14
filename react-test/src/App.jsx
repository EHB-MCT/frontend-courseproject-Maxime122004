import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import AboutUs from './pages/AboutUs';
import Sprookjes from './pages/Sprookjes';
import MakingOf from './pages/MakingOf';
import Layout2 from './pages/Layout2';
import HansGrietje from './pages/sprookjes/HansGrietje';

function App() {
  return (
    <>
        <BrowserRouter basename="/frontend-courseproject-Maxime122004">
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<AboutUs />} />
              <Route path='Sprookjes' element={<Sprookjes />} />
              <Route path='MakingOf' element={<MakingOf />} />
              <Route path='HansGrietje' element={<HansGrietje />} />
            </Route>
            <Route path='HansGrietje' element={<Layout2 />}>
              <Route index element={<HansGrietje />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
