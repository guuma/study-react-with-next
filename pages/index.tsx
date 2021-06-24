import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import classes from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';

export default function Home() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Component Did Mount: ${count}`);
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      console.log(`Component Did Unmount: ${count}`);
      document.body.style.backgroundColor = '';
    };
  }, []);
  const handleClick = useCallback((e) => {
    setCount((prevCount) => prevCount + 1);
  }, [count]);
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
