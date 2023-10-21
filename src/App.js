import './App.css';
import Header from './components/Header/Header';
import Top from './components/Header/Top';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Men from './components/Products/Men';
import Women from './components/Products/Women';

function App() {
  return (
    <div className="App">
      <Top />
      <Header />
      <NavBar />
      <Hero />
      <Women />
      <Men />
    </div>
  );
}

export default App;
