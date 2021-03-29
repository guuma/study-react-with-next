import React from 'react'
import styles from '../styles/Home.module.css'

function Headline(props) {
  console.log(props)
  return (
    <div>
      <h1 className={styles.title}>
        {`${props.page}`} Page
      </h1>
      <p className={styles.description}>
        Get started by editing
        <code className={styles.code}>{`pages/${props.page}.js`}</code>
      </p>
    </div>
  );
}

export default Headline
