import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage/LandingPage.js";
import { BrowserRouter, Route } from "react-router-dom";
import MyStocks from "./pages/MyStocks/MyStocks";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CreateTransaction from "./pages/CreateTransaction/CreateTransaction";
import { useState } from "react";
import ViewTransaction from "./pages/ViewTransaction/ViewTransaction";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <Header setSearch={(s) => setSearch(s)} />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route
          path="/mystock"
          component={({ history }) => (
            <MyStocks search={search} history={history} />
          )}
        />
        <Route
          path="/view"
          component={({ history }) => (
            <ViewTransaction search={search} history={history} />
          )}
        />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/createtransaction" component={CreateTransaction} />
        <Route path="/dashboard" component={Dashboard} />
      </main>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
