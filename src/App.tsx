import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
//query
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

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

//mypage
import Mypage from "./pages/MyPage";
import Order from "./containers/myPage/Order";
import Wish from "./containers/myPage/Wish";
import Cancel from "./containers/myPage/Cancel";
import OrderDetail from "./containers/myPage/OrderDetail";
import CancelDetail from "./containers/myPage/CancelDetail";
//style
import { theme } from "./style/theme";
import GlobalStyle from "./style/GlobalStyle";
import Loading from "./elements/Loading";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App">
          <Header />
          <Loading />
          <Routes>
            <Route path="/login" element={<LogInPage />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/mypage" element={<Mypage />}>
              <Route index element={<Order />} />
              <Route path=":id" element={<OrderDetail />} />
              <Route path="wish" element={<Wish />} />
              <Route path="cancel-call/:id" element={<CancelDetail />} />
              <Route path="cancel">
                <Route index element={<Cancel />} />
                <Route path=":id" element={<OrderDetail />} />
              </Route>
            </Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/list" element={<ListPage />}></Route>
            <Route path="/search" element={<SearchPage />}></Route>
            <Route
              path="/detail/:category/:prodNo"
              element={<DetailPage />}
            ></Route>
            <Route path="/payment" element={<PaymentPage />}></Route>
            <Route path="/complete" element={<CompletePage />}></Route>
          </Routes>
          <Footer />
          <ReactQueryDevtools />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
