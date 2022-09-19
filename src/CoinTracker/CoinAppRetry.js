import { useState, useEffect } from "react";
export default function CoinAppRetry() {
  const [load, setLoad] = useState(true);
  const [coininfo, setCoininfo] = useState([]);
  const [optionindex, setOptionindex] = useState(0);
  const [money, setMoney] = useState(1);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((data) => data.json())
      .then((res) => {
        setCoininfo((current) => [...res, current]);
        setLoad((current) => !current);

        //이때 데이터는 받아지고
      });
  }, []);
  return (
    <div>
      <h1>CoinTracker!</h1>
      {load ? <strong>Loading...</strong> : null}
      <select onChange={(e) => setOptionindex(e.target.value)}>
        {coininfo.map((item, index) => (
          <option value={index} key={index}>
            {item.name}
          </option>
        ))}
      </select>
      <input
        onChange={(e) => setMoney(e.target.value)}
        placeholder="달러"
        type="number"
        value={money}
      />
      <h1>
        {optionindex === 0
          ? null
          : money / coininfo[optionindex].quotes.USD.price}
      </h1>
    </div> //헤맨이유 => onChange를 해야 state의 변화가 일어나는데 onChange가 일어나기전의 변수를
    //HTML태그로 넣어 오류가 발생!
  );
}
