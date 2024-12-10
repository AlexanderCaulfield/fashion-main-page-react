import Arrivals from "./components/Arrivals/Arrivals";
import Brands from "./components/Brands/Brands";
import Community from "./components/Community/Community";
import Download from "./components/Download/Download";
import Favourite from "./components/Favourite/Favourite";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import Sale from "./components/Sale/Sale";

function App() {
  return (
    <div className="App">
        <Header />
        <Promo />
        <Brands />
        <Arrivals />
        <Sale />
        <Favourite />
        <Download />
        <Community />
        <Footer />
    </div>
  );
}

export default App;