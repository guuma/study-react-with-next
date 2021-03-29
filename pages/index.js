import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Links from '../components/Links';
import Headline from '../components/Headline';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Headline page="Index"/>
        <Links />
      </main>

      <Footer />
    </div>
  );
}
