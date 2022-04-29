import HomePage from "./Components/HomePage";
import Register from "./Components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={[HomePage]} />

        </Routes>
      
      </BrowserRouter>
      
    </>
    
    
    
  );
}

export default App;
