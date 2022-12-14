import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/home/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Card from "./Pages/cart/Card";
import './app.scss'
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footert/Footer";
import Contacts from "./Pages/contacts/Contacts";
import LocationPage from "./Pages/location/LocationPage";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import ConfirmMassage from "./components/ConfirmMassage/ConfirmMassage";


function App() {


  return (
    <>
      <Header />
      <NavBar />
      <BurgerMenu />
      <ConfirmMassage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
