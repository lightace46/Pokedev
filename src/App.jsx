import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./common/pages/Accueil";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
