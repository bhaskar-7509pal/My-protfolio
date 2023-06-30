
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';
import Projects from './components/project';


function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
