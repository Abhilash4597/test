import { useState } from 'react'
import './App.css'
import List from './components/list'
import Header from './components/header';
import Footer from './components/footer';
import data from './components/data';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <List data={data} />
      <Footer />
    </>
  );
}

export default App
