import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import FetchingJson from "./components/FetchingJson";
import AsyncAwait from "./components/AsyncAwait";
import CancelFetchReq from "./components/CancelFetchReq";

function App() {
  const [category, setCategory] = useState("");
  return (
    <>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="clothing">Clothing</option>
        <option value="household">Household</option>
      </select>
      <ProductList category={category} />
      <FetchingJson />

      <hr />
      <AsyncAwait />
      <hr />
      <CancelFetchReq />
    </>
  );
}

export default App;
