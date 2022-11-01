import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
