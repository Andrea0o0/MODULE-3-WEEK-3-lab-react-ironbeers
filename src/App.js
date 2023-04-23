import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Beers from './views/Beers';
import NewBeer from './views/NewBeer';
// FONTAWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import BeerDetail from './views/BeerDetail';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/beers' element={<Beers/>} />
      <Route path='/beers/:beerId' element={<BeerDetail/>} />
      <Route path='/random/:beerId' element={<BeerDetail/>} />
      <Route path='/new' element={<NewBeer/>} />
    </Routes>
      
    </div>
  );
}

export default App;
library.add(fab, fas, far)
