import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage/LandingPage.js";
import { BrowserRouter, Route } from "react-router-dom";
const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path="/" component={LandingPage} exact />
    </main>
    <Footer />
  </BrowserRouter>
);
export default App;
