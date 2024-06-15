import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import MainPage from "./components/MainPage";
import { HashRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [qnty, setQnty] = useState(Number);
  const [show, setShow] = useState<number>(0);
  const [price, setPrice] = useState(125);
  const [cartShowen, setCartShowen] = useState<boolean>(false);
  return (
    <>
      <HashRouter>
        <Header
          qnty={qnty}
          setQnty={setQnty}
          show={show}
          setShow={setShow}
          price={price}
          setPrice={setPrice}
          cartShowen={cartShowen}
          setCartShowen={setCartShowen}
        />
        <div>
          <MainPage
            qnty={qnty}
            setQnty={setQnty}
            price={price}
            setPrice={setPrice}
            show={show}
            setShow={setShow}
            cartShowen={cartShowen}
            setCartShowen={setCartShowen}
          />
        </div>
        <Analytics />
      </HashRouter>
    </>
  );
}

export default App;
