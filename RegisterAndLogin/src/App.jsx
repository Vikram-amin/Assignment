import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Routes>
       <Route path= "/register" element={<Register/>}>Register</Route>
       <Route path ="/login" element={<Login/>}>Login</Route>
     </Routes>
    
    </div>
  );
}

export default App;
