import { useBgLightBlue } from 'hooks/useBgLightBlue';
import { useCounter } from 'hooks/useCounter';
import { useInputArray } from 'hooks/useInputArray';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
	useBgLightBlue()
  return <Component {...pageProps} {...counter} {...inputArray} />;
}

export default MyApp;
