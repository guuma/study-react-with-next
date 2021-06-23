import Head from 'next/head';
import classes from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header'
import { Main } from '../components/Main';

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<Header />
      <Main page="index" />
      <Footer />
    </div>
  );
}
