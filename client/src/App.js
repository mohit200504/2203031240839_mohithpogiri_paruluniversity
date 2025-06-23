import "./App.css";

import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Register from "./userregister/regi.js";
import Login from "./userlogin/login.js";
import User from "./user/user.js";


function App(){

return (
  <center>

  <Router>
    <Routes>
      <Route path="/userregister" element={<Register></Register>}/>
      <Route path="/userlogin" element={<Login></Login>}/>
      <Route path="/user" element={<User></User>}/>
    </Routes>
  </Router>
</center>
)

   
}

export default App;
