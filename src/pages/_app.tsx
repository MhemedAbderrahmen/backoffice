import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import type { AppProps } from 'next/app';
import React from 'react';
import { InterventionsProvider } from 'src/state/interventions/InterventionsContext';
import lightTheme from 'src/styles/theme/lightTheme';
import '../styles/globals.css';
function MyApp({ Component, pageProps }: AppProps) {
  const [interventions, setInterventions] = React.useState([]);
  return (
    <ThemeProvider theme={lightTheme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <InterventionsProvider>
          <Component {...pageProps} />
        </InterventionsProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default MyApp;
