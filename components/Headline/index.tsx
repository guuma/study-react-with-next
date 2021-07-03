import React, { Children } from 'react';
import classes from './Headline.module.css';

export function Headline({page, children, handleReduce}) {
  return (
    <div>
      <button onClick={handleReduce}>減らす</button>
      <h1 className={classes.title}>{`${page} Page`}</h1>
      <p className={classes.description}>アイテムの数は{children}個です</p>
    </div>
  );
}
