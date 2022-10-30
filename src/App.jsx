import Counter from "./components/Counter";
import Error from "./components/Error";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Counter />}/>
          <Route path="*" element={ <Error />}/>
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
