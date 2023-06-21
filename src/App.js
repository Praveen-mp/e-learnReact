import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import NavB from './components/NavB'
// import MaterialTable from 'material-table'
import { Children, useState } from 'react';
import SignUp from './components/Signup';
import Prices from './components/Prices';
// SynchedInputs
// LiftingState
function App() {
  const sdate = new Date();
  return (
    <div className="App">
      <NavB/>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='Login' element={<Login/>}></Route>
        <Route path='signup' element={<SignUp/>}></Route> 
        <Route path='Prices' element={<Prices/>}></Route>   
        </Routes>
       {/* <Login/> */}
      </BrowserRouter>

    </div>
  );
}

export default App;



{/* <Route path='Create' element={<Create />}/>
        <Route path='Read' element={<Read/>}/>
        <Route path='Update' element={<Update/>}/>
        <Route path='Delete' element={<Delete/>}/>
        <Route path='Todo' element={<Todo/>}/>
        <Route path='Sculpture' element={<Sculpture/>}/>
        <Route path='HideSculpture' element={<HideSculpture/>}/>
        <Route path='Sculpt' element={<Sculpt/>}/>
        <Route path='EventHandling1' element={<EventHandling1/>}/>
        <Route path='ToolBar' element={<ToolBar/>}/>
        <Route path='Conditional' element={<Conditional/>}/>
        <Route path='Lists' element={<Lists/>}/>
        <Route path='ImageUrl' element={<ImageUrl/>}/>
        <Route path='LiftingState' element={<LiftingState/>}/>
        <Route path='SynchedInputs' element={<SynchedInputs/>}/>
        <Route path='MenuList' element={<MenuList/>}/>
         <Route path='Child' element={<Child dd={sdate.toLocaleDateString()}/>}/> */}
