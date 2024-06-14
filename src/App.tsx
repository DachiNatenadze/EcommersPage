import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import PriceCalc from "./components/PriceCalc";

function App() {
  const [qnty, setQnty] = useState(Number);
  const [show, setShow] = useState<number>(0);
  const [price, setPrice] = useState(125);
  return (
    <>
      <Header
        qnty={qnty}
        setQnty={setQnty}
        show={show}
        setShow={setShow}
        price={price}
        setPrice={setPrice}
      />
      <PriceCalc qnty={qnty} setQnty={setQnty} show={show} setShow={setShow} />
    </>
  );
}

export default App;
