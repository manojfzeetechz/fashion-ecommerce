import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./compontents/Header";
import Navbar from "./compontents/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
