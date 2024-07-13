import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Programs from './Pages/Programs';
import EI from './Pages/EI';
import Assessments from './Pages/Assessments';
import Centres from './Pages/Centres';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Calllang from './Components/Call_lang';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Calllang/>
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
