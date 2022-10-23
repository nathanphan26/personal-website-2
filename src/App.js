import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar';
import Landing from './components/landing'
import Projects from './components/projects'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Navbar/>
      <Landing/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;
