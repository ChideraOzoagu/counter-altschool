import Counter from "./components/Counter";
import Error from "./components/Error";
import ErrorCounter from "./components/errorBoundary";
import Reducer from "./components/Reducer";
import Navbar from "./components/Navbar";
import { Hamburger, NavClose } from "./icons";
import { useState } from "react";

import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [sidebar, setSidebar] = useState(false)
  return (
    <>
      <BrowserRouter>
      <button className="menu" onClick={()=>setSidebar(!sidebar)}>
        {
          sidebar ? <NavClose/> : <Hamburger/>
          
        }
      </button>
      <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="reducer" element={<Reducer />} />
          <Route path="*" element={<Error />} />
          <Route path="errorboundary" element={<ErrorCounter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
