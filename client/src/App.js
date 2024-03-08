import './CSS/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Home from './Pages/home';
import Flashcard from './Components/flashCard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/flashcard' element={<Flashcard/>} />
      </Routes>
    </Router>
  );
}

export default App;
