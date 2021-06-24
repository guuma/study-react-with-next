import { useCallback, useEffect } from 'react';
import Head from 'next/head';
import classes from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';

export default function Home() {
  useEffect(() => {
    console.log('Component Did Mount');
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      console.log('Unmount');
      document.body.style.backgroundColor = '';
    };
  }, []);
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
  }, []);
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  );
}
