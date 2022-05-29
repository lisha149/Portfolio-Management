import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage/LandingPage.js";
import { BrowserRouter, Route } from "react-router-dom";
import MyStocks from "./pages/MyStocks/MyStocks";
const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path="/" component={LandingPage} exact />
      <Route path="/" component={MyStocks} />
    </main>
    <Footer />
  </BrowserRouter>
);
export default App;
