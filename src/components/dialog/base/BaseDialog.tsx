import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import BackofficeService from 'src/services/BackofficeService';
import { IUserMimalData } from 'src/types/user.type';
import { FORM_VALIDATION, INITIAL_FORM_STATE } from './BaseDialog.hooks';
const emails = ['username@gmail.com', 'user02@gmail.com'];
export interface IBaseDialog {
  buttonTitle: string;
}
export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

function BaseDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;
  const router = useRouter();
  const handleClose = () => {
    onClose();
  };
  const submitForm = async (values: { email: string; phone: string }) => {
    let user: IUserMimalData = {
      email: '',
      phone: '',
    };
    let res: any;
    res = await BackofficeService.createUser(user);
    router.push('/users');
  };
  const formik = useFormik({
    initialValues: INITIAL_FORM_STATE,
    validationSchema: FORM_VALIDATION,
    onSubmit: submitForm,
  });
  return (
    <Dialog onClose={handleClose} open={open} maxWidth="sm" fullWidth>
      <DialogTitle>Creation Technicien</DialogTitle>
      <Box sx={{ width: '100%', p: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box width={'100%'} mb={2}>
            <Typography variant="body2">Email</Typography>
            <TextField
              fullWidth
              name="email"
              size="small"
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Box>
          <Box width={'100%'}>
            <Typography variant="body2">Numero Tel</Typography>
            <TextField
              fullWidth
              name="phone"
              size="small"
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Box>
        </Box>
      </Box>
      <DialogActions>
        <Button onClick={() => formik.handleSubmit()}>Creation</Button>
      </DialogActions>
    </Dialog>
  );
}

export default BaseDialog;
