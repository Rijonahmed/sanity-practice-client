import { Route, Routes } from 'react-router-dom';
import './App.css';

import Overview from './component/Home/Overview';

import Footer from './component/Home/Shared/Footer';
import Navber from './component/Home/Shared/Navber';
import ResortSpecials from './component/Home/Specials/ResortSpecials';


function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Overview />}></Route>
        <Route path='/overview' element={<Overview />}></Route>
        <Route path='/specials' element={<ResortSpecials />}></Route>
      </Routes>



      <Footer />
    </div>
  );
}

export default App;
