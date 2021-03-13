import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Auth from "./components/Auth";
import GuestRoute from "./routes/GuestRoute";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import theme from "./theme";
import store from "./store";

import "./mock";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Auth>
            <Routes>
              <Route path="/" element={<Home />} />
              <GuestRoute path="/sign-in" element={<SignIn />} />j
              <Route path="*" element={<h1>Not Found 404!</h1>} />j
            </Routes>
          </Auth>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
