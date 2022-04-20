import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import CaPheTaiNha from "./pages/CaPheTaiNha/CaPheTaiNha";
import GioHang from "./pages/GioHang/GioHang";
import TrangChu from "./pages/TrangChu/TrangChu";
import Tra from "./pages/Tra/Tra";
import Menu from "./pages/Menu/Menu";
import Navbar from "./Components/Navbar/Navbar";
import SignUpPage from "./pages/PageAccount/SignUpPage";
import SignInPage from "./pages/PageAccount/SignInPage";
import { CartProvider } from "./contexts/cart-context";
import { AuthContextProvider } from "./contexts/auth-context";
import Bottom from "./Components/Bottom/Bottom";
const App = () => {
  return (
    <AuthContextProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <main>
            <Switch>
              <Route path="/" exact>
                <>
                  <TrangChu />
                </>
              </Route>
              <Route path="/caphe" exact>
                <CaPheTaiNha />
              </Route>
              <Route path="/tra" exact>
                <Tra />
              </Route>
              <Route path="/menu" exact>
                <Menu />
              </Route>
              <Route path="/giohang" exact>
                <GioHang />
              </Route>
              <Route path="/signup" exact>
                <SignUpPage />
              </Route>
              <Route path="/signin" exact>
                <SignInPage />
              </Route>
              <Redirect to="/" />
            </Switch>
          </main>
        </Router>
        <Bottom />
      </CartProvider>
    </AuthContextProvider>
  );
};

export default App;
