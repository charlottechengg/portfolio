import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    // remove basename for dev
    <Router className="app" basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/github' component={() => {
        window.location.href = 'https://github.com/manyicheng';
     return null;
}}/>
      </Routes>
    </Router>
  );
}
export default App;
