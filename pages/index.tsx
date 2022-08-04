import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import classes from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
const Home = (props) => {
  const [posts, setPosts] = useState<Array<T>>([]);
  const getPosts = useCallback(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await res.json();
    setPosts(json);
  }, []);
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  console.log(posts.length);

  return (
    <div className={classes.container}>
      <Head>
        <title>Index Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {posts.length > 0 ? (
        <ol>
          {posts.map((post, index) => {
            return <li key={index}>{post.title}</li>;
          })}
        </ol>
      ) : undefined}
    </div>
  );
};

export default Home;
