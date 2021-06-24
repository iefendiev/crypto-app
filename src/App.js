import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import CryptoDisplay from './components/CryptoDisplay';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import axios from 'axios';

const queryClient = new QueryClient(); // Instance of QueryClient

function App() {
  const [search, setSearch] = useState('');
  const fetchApi = async () =>
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => res.data);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Coin Analytics</h1>
        <Search search={search} setSearch={setSearch} />
        <CryptoDisplay fetchApi={fetchApi} search={search} />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
