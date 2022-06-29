import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Country from './pages/Country/Country';
import Sort from './components/Sort/Sort';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/country/:name/:code' element={<Country/>} />
        <Route path='/sort' element={<Sort/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
