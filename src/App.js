import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className=" w-full h-fit bg-[url('https://wallpapercave.com/wp/wp2858551.jpg')] bg-center bg-no-repeat bg-cover ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<HomePage />} path="/"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
