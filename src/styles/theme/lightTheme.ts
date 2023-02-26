import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  components: {},
  palette: {
    mode: 'light',
    // primary: {
    //   main: '#003f5c',
    // },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default lightTheme;
