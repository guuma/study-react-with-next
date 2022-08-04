import { useBgColor } from 'hooks/useBgColor';
import { useCounter } from 'hooks/useCounter';
import { useInputArray } from 'hooks/useInputArray';
import { ClickToComponent } from 'click-to-react-component';

import '../styles/globals.css';
const MyApp = ({ Component, pageProps }) => {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();
  <ClickToComponent editor="vscode-insiders" />;
  return <Component {...pageProps} {...counter} {...inputArray} />;
};

export default MyApp;
