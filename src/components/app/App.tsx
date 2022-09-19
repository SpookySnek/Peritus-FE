import React, { useEffect, useState } from 'react';
import { MantineProvider, Text } from '@mantine/core';
import AddQuote from '../addQuote/addQuote';
import QuoteList from '../quoteList/quoteList';
import axios from 'axios';

export interface Quote {
  id: number,
  quoteText: string,
  uploadDate: Date,
}




function App() {

  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      const resp = await axios.get('https://localhost:7120/quotes');

      setQuotes(prev => (resp.data))
    }
    dataFetch();
  }, [])
  console.log("I rendered")
  return (
    <>
      <header>
        <h1 className="headerText">Peritus</h1>
      </header>
      <div className="App">
        <AddQuote />
        <div className="Content">
          <QuoteList datalist={quotes} />
        </div>
      </div>
      <footer>
        <small>Created by Carl Morisbak Olsson @2022</small>
      </footer>
    </>
  );
}

export default App;