import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "./application/redux/store";
import Header from "./presentation/containers/Header/Header";
import Home from "./presentation/pages/Home/Home";
import Shop from "./presentation/pages/Shop/Shop";

const App: FC = () => {
  return (
    <>
      <ReduxProvider store={store}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop/:idShop" element={<Shop />} />
          </Routes>
        </BrowserRouter>
      </ReduxProvider>
    </>
  );
};

export default App;
