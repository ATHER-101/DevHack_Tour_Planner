import './App.css';
import FirstPage from './Components/FirstPage';
import Navbar from './Components/Navbar';

import { Routes, Route } from 'react-router-dom';
import SecondPage from './Components/SecondPage';
import LastPage from './Components/LastPage';
import ThirdPage from './Components/ThirdPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<FirstPage/>}/>
        <Route path='/details' element={<SecondPage/>}/>
        <Route path='/preference' element={<ThirdPage/>}/>
        <Route path='/tour' element={<LastPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
