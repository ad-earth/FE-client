import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
//query
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "./shared/utils/queryClient";
import { Toaster } from "react-hot-toast";

import Header from "./containers/header/Header";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import ListPage from "./pages/ListPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import PaymentPage from "./pages/PaymentPage";
import CompletePage from "./pages/CompletePage";
import Footer from "./containers/footer/Footer";
import NotFound from "./pages/NotFound";
//mypage
import Mypage from "./pages/MyPage";
import Order from "./containers/myPage/order/Order";
import Wish from "./containers/myPage/wish/Wish";
import OrderDetail from "./containers/myPage/orderDetail/OrderDetail";
import CancelDetail from "./containers/myPage/cancelDetail/CancelDetail";
//style
import { theme } from "./style/theme";
import GlobalStyle from "./style/GlobalStyle";
import Loading from "./elements/loading/Loading";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App">
          <Header />
          <Toaster />
          <Loading />
          <Routes>
            <Route path="/login" element={<LogInPage />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/" element={<MainPage />}></Route>
            <Route element={<Mypage />}>
              <Route path="/mypage">
                <Route index element={<Order />} />
                <Route path=":id" element={<OrderDetail />} />
                <Route path="cancel-call/:id" element={<CancelDetail />} />
              </Route>
              <Route path="wish" element={<Wish />} />
              <Route path="cancel">
                <Route index element={<Order />} />
                <Route path=":id" element={<OrderDetail />} />
              </Route>
            </Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/list/:category" element={<ListPage />}></Route>
            <Route path="/search/:keyParams" element={<SearchPage />}></Route>
            <Route path="/detail/:productNo" element={<DetailPage />}></Route>
            <Route path="/payment" element={<PaymentPage />}></Route>
            <Route path="/complete" element={<CompletePage />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <ReactQueryDevtools />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
