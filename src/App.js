import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './components/Aboutme/AboutMe';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <main className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} ></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/project' element={<Project />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/*' element={<h1>Page Not Found!!</h1>}></Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
