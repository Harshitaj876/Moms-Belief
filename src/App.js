import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Programs from './Pages/Programs';
import EI from './Pages/EI';
import Assessments from './Pages/Assessments';
import Centres from './Pages/Centres';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index element ={<Home/>}/>
          <Route path='/programs' element ={<Programs/>}/>
          <Route path='/emotionalIntelligence' element ={<EI/>}/>
          <Route path='/assessment' element ={<Assessments/>}/>
          <Route path='/centres' element ={<Centres/>}/>
          <Route path='/login' element ={<Login/>}/>
          <Route path='/signup' element ={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
