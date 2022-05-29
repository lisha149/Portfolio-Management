import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage/LandingPage.js";
import { BrowserRouter, Route } from "react-router-dom";
import MyStocks from "./pages/MyStocks/MyStocks";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path="/" component={LandingPage} exact />
      <Route path="/mystock" component={MyStocks} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </main>
    <Footer />
  </BrowserRouter>
);
export default App;
