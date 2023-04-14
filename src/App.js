import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AlbumPage from "./Components/AlbumPage";
import ArtistPage from "./Components/ArtistPage";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import SidebarPage from "./Components/SidebarPage";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <SidebarPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/album/:id" element={<AlbumPage />} />
        <Route path="/artist/:id" element={<ArtistPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
