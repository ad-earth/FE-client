import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import ListPage from "./pages/ListPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import PaymentPage from "./pages/PaymentPage";
import CompletePage from "./pages/CompletePage";
import Footer from "./containers/Footer";

//mypage
import Mypage from "./pages/MyPage";
import Order from "./containers/myPage/Order";
import Wish from "./containers/myPage/Wish";
import Cancel from "./containers/myPage/Cancel";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/mypage/*" element={<Mypage />}>
          <Route path="" element={<Order />} />
          <Route path="wish" element={<Wish />} />
          <Route path="cancel" element={<Cancel />} />
        </Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/list" element={<ListPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/payment" element={<PaymentPage />}></Route>
        <Route path="/complete" element={<CompletePage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
