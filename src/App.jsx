import { useState } from "react";
import "./App.css";
import ShowResaultSearch from "./ShowResaultSearch";

function App() {
  const [valueInputSearcch, setValueInputSearch] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const sendRequestSearch = () => {
    setShowCart(true);
  };
  return (
    <div>
      <input type="text" className="border-2" onChange={(e)=>setValueInputSearch(e.target.value)} />
      <button onClick={sendRequestSearch}>search</button>
      {showCart && <ShowResaultSearch valueInputSearcch={valueInputSearcch} />}
    </div>
  );
}

export default App;
