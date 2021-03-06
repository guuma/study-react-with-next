import React, { useState, useCallback } from 'react';
import classes from './Links.module.css';
import { Items } from '../Main';

export const Links = (props) => {
  return (
    <div className={classes.grid}>
      {props.items.map((item, index) => {
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
