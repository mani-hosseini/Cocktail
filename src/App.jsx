import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Newsletter from './pages/Newsletter';
import About from './pages/About';
import Home from './pages/Home';
import Details from "./components/details.jsx";


function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/newsletter" element={<Newsletter/>}/>
                <Route path="/cocktail/:id" element={<Details/>}/>
            </Routes>
        </Router>
    );
}

export default App;
