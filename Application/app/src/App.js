import HomePage from "./Components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./Components/Feed";
import Register from "./Components/Register";



function App() {
  return (
      <BrowserRouter>
        <Routes>
        // rename to landing page
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/register" element={<Register/>} />

        
          //anything else has to be Authenticated
          //figure out how to get user from token
          //rename feed to HomePage
          <Route path="/feed" element={<Feed/>} />
        </Routes>
      
      </BrowserRouter>
    
  );
}

export default App;
