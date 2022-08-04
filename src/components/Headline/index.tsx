import classes from './Headline.module.css';

export const Headline = (props) => {
  return (
    <div>
      <button onClick={props.handleReduce}>減らす</button>
      <h1 className={classes.title}>{`${props.page} Page`}</h1>
      <p className={classes.description}>アイテムの数は{props.children}個です</p>
    </div>
  );
};
