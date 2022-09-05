import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/home/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Card from "./Pages/cart/Card";
import './app.scss'
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footert/Footer";
import MobCartCounter from "./components/MobCartCounter/MobCartCounter";

function App() {


  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
