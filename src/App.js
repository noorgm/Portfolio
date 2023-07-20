import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <main className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} ></Route>
          <Route path='/*' element={<h1>Page Not Found!!</h1>}></Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
