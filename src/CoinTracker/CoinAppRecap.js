import { useEffect, useState } from "react";

export default function CoinAppRecap() {
  const [coin, setCoin] = useState([]);
  const [selectindex, setSelcetindex] = useState(0);
  const [pricevalue, setPricevalue] = useState(1);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((data) => data.json())
      .then((res) => {
        setCoin((current) => [...current, ...res]);
      });
  }, []);
  return (
    <div>
      <h1>Welcome To CoinTracker!</h1>
      <select onChange={(e) => setSelcetindex(e.target.value)}>
        {coin.map((item, index) => {
          return (
            <option value={index} key={index}>
              {item.symbol}
            </option>
          );
        })}
      </select>
      <input
        onChange={(e) => setPricevalue(e.target.value)}
        placeholder="달러"
        type="number"
        value={pricevalue}
      />
      {selectindex === 0 ? null : (
        <h3>
          약 {Math.round(pricevalue / coin[selectindex].quotes.USD.price)}개 살
          수 있습니다
        </h3>
      )}
    </div>
  );
}
//https://api.coinpaprika.com/v1/tickers
