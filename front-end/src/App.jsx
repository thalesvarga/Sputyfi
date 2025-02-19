import "./App.css";
import Header from "./componentes/Header";
import Artists from "./componentes/Pages/Artists";
import Artist from "./componentes/Pages/Artist";
import Songs from "./componentes/Pages/Songs";
import Song from "./componentes/Pages/Song";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componentes/Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:id" element={<Artist />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
