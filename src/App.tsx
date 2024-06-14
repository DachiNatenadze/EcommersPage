import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import PriceCalc from "./components/PriceCalc";
import MainPage from "./components/MainPage";

function App() {
  const [qnty, setQnty] = useState(Number);
  const [show, setShow] = useState<number>(0);
  const [price, setPrice] = useState(125);
  const [cartShowen, setCartShowen] = useState<boolean>(false);
  return (
    <>
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
      <MainPage
        price={price}
        setPrice={setPrice}
        show={show}
        setShow={setShow}
        cartShowen={cartShowen}
        setCartShowen={setCartShowen}
      />
      <PriceCalc qnty={qnty} setQnty={setQnty} show={show} setShow={setShow} />
    </>
  );
}

export default App;
