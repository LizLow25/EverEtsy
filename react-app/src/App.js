import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import ProductDetails from "./components/ProductDetails";
import ShopDetails from "./components/ShopDetails";
import ManageShop from "./components/ManageShop";
import Cart from "./components/Cart";
import SearchResults from "./components/SearchResults";
import ManageReviews from "./components/ManageReviews";
import ReroutePage from "./components/ReroutePage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
      <Switch>
      <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/!">
          <ReroutePage />
        </Route>
        <Route exact path="/products/search">
          <SearchResults />
        </Route>
        <Route exact path="/products/:productId">
          <ProductDetails />
        </Route>
        <Route exact path="/shops/manage">
          <ManageShop />
        </Route>
        <Route exact path="/shops/:shopId">
          <ShopDetails />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/reviews">
          <ManageReviews />
        </Route>
      </Switch>
    </>
  );
}

export default App;
