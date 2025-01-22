import "./App.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import Membership from "./components/Membership";
import Whyjoin from "./components/Whyjoin";
import Footer from "./components/Footer";
import MoveSlider from "./components/MoveSlider";

const App = () => {
  return (
    <div className="app">
    <Header />
    <Banner />
    <MoveSlider />
    <Whyjoin />
    <FAQ />
    <Membership />
    <Footer />

    </div>
  );
};

export default App;