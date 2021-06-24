import React from 'react';
import { useQuery } from 'react-query';
import { TrendingUpIcon as TrendUp } from '@heroicons/react/solid';
import { TrendingDownIcon as TrendDown } from '@heroicons/react/solid';

const CryptoDisplay = ({ fetchApi, search }) => {
  const { data, isLoading } = useQuery(['currency'], fetchApi);

  const numberWithCommas = (x) =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className="coin-window">
      <div className="caption">
        <div className="grid-rank"># Rank</div>
        <div></div>
        <div className="grid-logo-name">Coin</div>
        <div>Current Price</div>
        <div className="grid-coin-marketCap">Market Cap</div>
        <div className="grid-coin-price">Price Change in 24h</div>
      </div>
      <div className="coins">
        {isLoading
          ? 'Loading...'
          : data
              .filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((coin) => (
                <div className="coin-item" key={coin.id}>
                  <div className="grid-rank">{data.indexOf(coin) + 1}</div>
                  <img className="coin-logo" src={coin.image} alt="coin-logo" />
                  <div className="grid-name">{coin.name}</div>
                  <div>$ {numberWithCommas(coin.current_price.toFixed(2))}</div>
                  <div className="grid-coin-marketCap">
                    $ {numberWithCommas(coin.market_cap)}
                  </div>
                  <div
                    className={
                      coin.price_change_percentage_24h > 0
                        ? 'coin-price-incr'
                        : 'coin-price-decr'
                    }
                  >
                    {coin.price_change_percentage_24h > 0 ? (
                      <TrendUp className="trend" />
                    ) : (
                      <TrendDown className="trend" />
                    )}
                    {coin.price_change_percentage_24h.toFixed(2)} %
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
};

export default CryptoDisplay;
