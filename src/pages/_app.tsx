import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import lightTheme from 'src/styles/theme/lightTheme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />{' '}
    </ThemeProvider>
  );
}

export default MyApp;
