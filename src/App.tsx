import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import CartPage from "./pages/CartPage";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import PaymentPage from "./pages/PaymentPage";
import CompletePage from "./pages/CompletePage";
import Footer from "./containers/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/list" element={<ListPage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/payment" element={<PaymentPage />}></Route>
        <Route path="/complete" element={<CompletePage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
