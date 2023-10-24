import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './COMPONENTS/HOME/Home';
import Button from './COMPONENTS/button/Button';
import Close from './COMPONENTS/Close_button/Close';
import Card from './COMPONENTS/CARDS/Card';
import Seemore from './COMPONENTS/Button2/Seemore';
import Sentdata from './COMPONENTS/Message/Sentdata';
import Visiting from './COMPONENTS/visiting/Visiting';
import Event from './COMPONENTS/EVENT/Event';
import Menu from './COMPONENTS/MENU/Menu';
import Items from './COMPONENTS/MENU/Items';
import Button3 from './COMPONENTS/Menubutton/Button3';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/burron3' element={<Button3 />}/>
        <Route path='/button' element={<Button />}/>
        <Route path='/closebutton' element={<Close />}/>
        <Route path='/card' element={<Card />}/>
        <Route path='/see' element={<Seemore />}/>
        <Route path='/sent' element={<Sentdata />}/>
        <Route path='/visit' element={<Visiting />}/>
        <Route path='/event' element={<Event />}/>
        <Route path='/menus' element={<Menu />}/>
        <Route path='/item' element={<Items />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
