import { useState, useEffect } from "react";

export default function CoinApp() {
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((data) => data.json())
      .then((res) => {
        apiArr([...res]);
        setLoading((current) => !current);
      });
  }, []);
  const [loading, setLoading] = useState(true);
  const [apiarr, apiArr] = useState([]);
  const [coindex, setCoindex] = useState(0);
  const [values, setValues] = useState();
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select
        onChange={(e) => {
          setCoindex(e.target.value);
        }}
      >
        {apiarr.map((item, index) => (
          <option value={item.quotes.USD.price} key={index}>
            {item.symbol}
          </option>
        ))}
      </select>
      <div>
        <input
          onChange={(e) => setValues(e.target.value)}
          value={values}
          placeholder="머니"
          type="number"
        />
        <input value={coindex / values} placeholder="코인" type="number" />
      </div>
    </div>
  );
} //<input value={apiarr[coinex].quotes.USD / values} />
//새로고침하면 API가 드어오고 아직 안들어왔는데 미리 짜기때문에!
