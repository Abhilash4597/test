import { useState } from 'react'
import './App.css'
import List from './components/list'
import Header from './components/header';
import Footer from './components/footer';
import Search from './components/search';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Search></Search>
      <List></List>
      <Footer></Footer>
    </>
  );
}

export default App
