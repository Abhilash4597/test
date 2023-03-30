import { useState } from 'react'
import './App.css'
import List from './components/list'
import Header from './components/header';
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <List></List>
      <Footer></Footer>
    </>
  );
}

export default App
