import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./providers/AuthProvider";
import "semantic-ui-css/semantic.min.css";
import { initMiddleware } from "devise-axios";
import { CartProvider } from './providers/CartProvider'
import ScrollToTop from "./components/ScrollToTop"



initMiddleware();

ReactDOM.render(
  <AuthProvider>
    <CartProvider>
      <BrowserRouter>
      <ScrollToTop/>
        <App />
      </BrowserRouter>
    </CartProvider>
  </AuthProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
