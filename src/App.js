import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar';
import Main from './components/main'
import AllProjects from './components/allProjects'
import Footer from './components/footer'

import  { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path ="/" element={<Main/>}/>
          <Route path ="/projects" element={<AllProjects/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
