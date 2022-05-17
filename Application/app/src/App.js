import HomePage from "./Components/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./Components/Feed";
import Register from "./Components/Register";
import LandingPage from "./Components/LandingPage";
import Home from "./Components/Home";
import Unautorized from "./Components/Unauthorized";
import Post from "./Components/Post";



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/unauthorized" element={<Unautorized />} />

          // Routes bellow have to be Authenticated
          //figure out how to get user from token
          <Route path="/home" element={<Home/>} />
          <Route path="/post/:id" element={<Post></Post>} />
        </Routes>
      
      </BrowserRouter>
    
  );
}

export default App;
