import '../styles/global.css';

type Props = {
  Component: any,
  pageProps: any
}

const App = ({ Component, pageProps}: Props) => {
  return <Component {...pageProps} />;
}

export default App;