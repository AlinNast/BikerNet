import HomePage from "./Components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./Components/Feed";
import Register from "./Components/Register";



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/feed" element={<Feed/>} />
        </Routes>
      
      </BrowserRouter>
    
  );
}

export default App;
