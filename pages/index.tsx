import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import classes from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';

export default function Home() {
  const [count, setCount] = useState(0);
  const [text, SetText] = useState('');
  const [isShow, setIsShow] = useState(false);
  const showText = isShow ? '非表示' : '表示';
  useEffect(() => {
    console.log(`Component Did Mount: ${count}`);
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      console.log(`Component Did Unmount: ${count}`);
      document.body.style.backgroundColor = '';
    };
  }, []);
  const handleClick = useCallback(
    (e) => {
      setCount((prevCount) => prevCount + 1);
    },
    [count]
  );
  const handleChange = useCallback((e) => {
    if (text.length >= 5) {
      return;
    }
    SetText(e.target.value);
  }, []);
  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {isShow && <h1>{count}</h1>}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{showText}</button>
      <input type="text" value={text} onChange={handleChange} />
      <Main page="index" />
      <Footer />
    </div>
  );
}
