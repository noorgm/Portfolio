import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <main className="app">
        <Navbar />
        <Home />
        <Footer />
    </main>
  );
}

export default App;
