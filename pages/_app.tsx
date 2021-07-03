import { useBgColor } from 'hooks/useBgColor';
import { useCounter } from 'hooks/useCounter';
import { useInputArray } from 'hooks/useInputArray';
import '../styles/globals.css';
const MyApp = ({ Component, pageProps }) => {
  const counter = useCounter();
  const inputArray = useInputArray();
	useBgColor()
  return <Component {...pageProps} {...counter} {...inputArray} />;
}

export default MyApp;
