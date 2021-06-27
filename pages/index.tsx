import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import classes from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { useBgLightBlue } from 'hooks/useBgLightBlue';
import { useCounter } from 'hooks/useCounter';
import { useInputArray } from 'hooks/useInputArray';
export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightBlue();
  const showText = isShow ? '非表示' : '表示';
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
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
      <Footer />
    </div>
  );
}
