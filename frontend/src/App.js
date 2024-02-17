import Mainpage from './Pages/mainpage';
import Login from './Pages/login';
import SignUp from './Pages/signup';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/main' element={<Mainpage/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
