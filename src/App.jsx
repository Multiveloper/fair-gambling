import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import GamesContainer from './components/GamesContainer';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Navbar />
      {/* Body */}
      <GamesContainer />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
