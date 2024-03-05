import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Blogs';

function App() {
  <>

    <h1>React Router Demo</h1>

    <BrowserRouter basename="/">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Blogs' element={<Blogs />} />
          <Route path='Contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
