import BaseLayout from '@/components/layout/base/BaseLayout';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';
import AuthContext, { AuthProvider } from 'src/state/interventions/AuthContext';
import { InterventionsProvider } from 'src/state/interventions/InterventionsContext';
import lightTheme from 'src/styles/theme/lightTheme';

import '../styles/globals.css';
function MyApp({ Component, pageProps }: AppProps) {
  const [interventions, setInterventions] = React.useState([]);
  const { login } = React.useContext(AuthContext);
  const router = useRouter();
  // React.useEffect(() => {
  //   const pathToExclude = ['/reset-password', '/login'];
  //   const accessToken = localStorage.getItem('access-token');
  //   const refreshToken = localStorage.getItem('refresh-token');
  //   async function fetchData(access: string) {
  //     try {
  //       let response: any;
  //       response = await UserService.getMe();
  //       login(response.data, refreshToken, access);
  //     } catch (error) {
  //       router.push('/login');
  //     }
  //   }

  //   if (!pathToExclude.includes(router.pathname)) {
  //     if (accessToken) fetchData(accessToken);
  //     else router.push('/login');
  //   }
  // }, [login, router]);
  return (
    <ThemeProvider theme={lightTheme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <AuthProvider>
          <InterventionsProvider>
            <BaseLayout router={router}>
              <Component {...pageProps} />
            </BaseLayout>
          </InterventionsProvider>
        </AuthProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default MyApp;
