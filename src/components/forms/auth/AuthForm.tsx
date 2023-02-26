import { Box, Button, Container, TextField, Typography } from '@mui/material';
import Image from 'next/image';

export interface IAuthForm {
  sampleTextProp?: string;
}

const AuthForm: React.FC<IAuthForm> = ({ sampleTextProp }) => {
  return (
    <Container maxWidth="xs" sx={{ width: '100%', height: '100%' }}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Image src={'/tech-logo.png'} alt="logo" width={100} height={100} />
        </Box>
        <Box mt={3} mb={3} sx={{ textAlign: 'center' }}>
          <Typography fontFamily={'Segoe UI'} fontWeight={'bold'} variant="h6">
            Signin
          </Typography>
        </Box>
        <Box
          mb={3}
          sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
          <Box>
            <Typography variant="body2">Username</Typography>
          </Box>
          <TextField
            variant="outlined"
            fullWidth
            size="small"
            type={'text'}
            sx={{ mb: 1 }}
          />
          <Box>
            <Typography variant="body2">Password</Typography>
          </Box>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            type={'password'}
          />
        </Box>
        <Box width={'100%'}>
          <Button fullWidth>Signin</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AuthForm;
