import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import Membership from "./components/Membership";
import Whyjoin from "./components/Whyjoin";
import Footer from "./components/Footer";
import MoveSlider from "./components/--MoveSlider";
import MoveSlider2 from "./components/MoveSlider2";
import Login from "./components/Login";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="app">
          <Header />
          <Banner />
          {/* <MoveSlider /> */}
          <MoveSlider2/>
          <Whyjoin />
          <FAQ />
          <Membership />
          <Footer />
          </div>
          }/>
          <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;