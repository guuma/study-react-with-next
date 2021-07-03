import React from 'react';
import Link from 'next/link';
import classes from './Header.module.css';

const NAV_ITEMS = [
  { href: '/', label: 'Index' },
  { href: '/about', label: 'About' },
];

export const Header = () => {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((item, index) => {
        return (
          <Link href={item.href} key={index}>
            <a className={classes.anchor}>{item.label}</a>
          </Link>
        );
      })}
    </header>
  );
};
