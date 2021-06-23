import React from 'react';
import classes from './Links.module.css';

const ITEMS = [
  {
    href: 'https://nextjs.org/docs',
    title: 'Documentation →',
    description: 'Find in-depth information about Next.js features and API.',
  },
  {
    href: 'https://nextjs.org/learn',
    title: 'Learn →',
    description: 'Learn about Next.js in an interactive course with quizzes!',
  },
  {
    href: 'https://github.com/vercel/next.js/tree/master/examples',
    title: 'Examples →',
    description: 'Discover and deploy boilerplate example Next.js projects.',
  },
  {
    href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Deploy →',
    description: 'Instantly deploy your Next.js site to a public URL with Vercel.',
  },
];

const ItemArray = ITEMS.map((item, index) => [index, item.href, item.title, item.description])
console.log(ItemArray)

export const Links = () => {
  return (
    <div className={classes.grid}>
      {ITEMS.map((item, index) => {
        return (
          <a key={index} href={item.href} className={classes.card}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
};
