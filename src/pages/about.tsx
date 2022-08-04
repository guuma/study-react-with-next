import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';

const About = (props) => {
  const showText = props.isShow ? '非表示' : '表示';
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {props.isShow && <h1>{props.doubleCount}</h1>}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>{showText}</button>
      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
      <Footer />
    </div>
  );
};

export default About;
