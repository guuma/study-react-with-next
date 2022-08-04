import { useBgColor } from 'src/hooks/useBgColor';
import { useCounter } from 'src/hooks/useCounter';
import { useInputArray } from 'src/hooks/useInputArray';
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
