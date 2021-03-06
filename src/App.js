import DragonBallAPI from './components/DragonBallAPI';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <DragonBallAPI />
      <Footer />
    </div>
  );
}

export default App;
