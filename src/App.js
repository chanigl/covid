import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Country from './pages/Country/Country';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        {/* <Route path='/country' element={<Country/>} /> */}
        <Route path='/country/:name/:code' element={<Country/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
