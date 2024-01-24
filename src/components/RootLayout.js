import React from "react";
import { Provider } from "react-redux";
import {Outlet} from "react-router-dom";
import NavBar from "./Navbar";
import store from "../store/store";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </Provider>
  );
};

export default RootLayout;
