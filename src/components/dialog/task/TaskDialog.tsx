import { FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material';
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
import IJobData from 'src/types/job.type';
import { FORM_VALIDATION, INITIAL_FORM_STATE } from './TaskDialog.hooks';
const emails = ['username@gmail.com', 'user02@gmail.com'];
export interface ITaskDialog {
  buttonTitle: string;
}
export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

function TaskDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;
  const router = useRouter();
  const handleClose = () => {
    onClose();
  };
  const submitForm = async (values: {
    site_name: string;
    reference: string;
    operateur: string;
    adress: string;
    contact_client: string;
    chambre: string;
    bpe: string;
    add_info: string;
    devis_av: boolean;
    four_fo: boolean;
    thirty_fo: boolean;
    site_raccorde: boolean;
  }) => {
    let job: IJobData = {
      site_name: '',
      site_raccorde: false,
      reference: '',
      operateur: '',
      adress: '',
      contact_client: '',
      chambre: '',
      bpe: '',
      add_info: '',
      devis_av: false,
      four_fo: false,
      thirty_fo: false,
    };

    let res: any;
    res = await BackofficeService.createJob(job);
    router.push('/users');
  };
  const formik = useFormik({
    initialValues: INITIAL_FORM_STATE,
    validationSchema: FORM_VALIDATION,
    onSubmit: submitForm,
  });
  return (
    <Dialog onClose={handleClose} open={open} maxWidth="sm" fullWidth>
      <DialogTitle>Creation Intervention/Tache</DialogTitle>
      <Box sx={{ width: '100%', p: 1 }}>
        <Grid container maxWidth={'100%'} spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2">Nom Site</Typography>
            <TextField
              fullWidth
              name="site_name"
              size="small"
              onChange={formik.handleChange}
              error={
                formik.touched.site_name && Boolean(formik.errors.site_name)
              }
              helperText={formik.touched.site_name && formik.errors.site_name}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Reference</Typography>
            <TextField
              fullWidth
              name="reference"
              size="small"
              onChange={formik.handleChange}
              error={
                formik.touched.reference && Boolean(formik.errors.reference)
              }
              helperText={formik.touched.reference && formik.errors.reference}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Operateur</Typography>
            <TextField
              fullWidth
              name="operateur"
              size="small"
              onChange={formik.handleChange}
              error={
                formik.touched.operateur && Boolean(formik.errors.operateur)
              }
              helperText={formik.touched.operateur && formik.errors.operateur}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Adresse</Typography>
            <TextField
              fullWidth
              name="adress"
              size="small"
              onChange={formik.handleChange}
              error={formik.touched.adress && Boolean(formik.errors.adress)}
              helperText={formik.touched.adress && formik.errors.adress}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Contact Client</Typography>
            <TextField
              fullWidth
              name="contact_client"
              size="small"
              onChange={formik.handleChange}
              error={
                formik.touched.contact_client &&
                Boolean(formik.errors.contact_client)
              }
              helperText={
                formik.touched.contact_client && formik.errors.contact_client
              }
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Chambre</Typography>
            <TextField
              fullWidth
              name="chambre"
              size="small"
              onChange={formik.handleChange}
              error={formik.touched.chambre && Boolean(formik.errors.chambre)}
              helperText={formik.touched.chambre && formik.errors.chambre}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">BPE</Typography>
            <TextField
              fullWidth
              name="bpe"
              size="small"
              onChange={formik.handleChange}
              error={formik.touched.bpe && Boolean(formik.errors.bpe)}
              helperText={formik.touched.bpe && formik.errors.bpe}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Four Fo</Typography>

            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="four_fo"
              value={formik.initialValues.four_fo}
              onChange={formik.handleChange}
            >
              <FormControlLabel value={true} control={<Radio />} label="True" />
              <FormControlLabel
                value={false}
                control={<Radio />}
                label="False"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Thirty Fo</Typography>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="thirty_fo"
              value={formik.initialValues.thirty_fo}
              onChange={formik.handleChange}
            >
              <FormControlLabel value={true} control={<Radio />} label="True" />
              <FormControlLabel
                value={false}
                control={<Radio />}
                label="False"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">Devis Av</Typography>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="devis_av"
              value={formik.initialValues.devis_av}
              onChange={formik.handleChange}
            >
              <FormControlLabel value={true} control={<Radio />} label="True" />
              <FormControlLabel
                value={false}
                control={<Radio />}
                label="False"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">Add Info</Typography>
            <TextField
              fullWidth
              multiline
              rows={5}
              name="add_info"
              size="small"
              onChange={formik.handleChange}
              error={formik.touched.add_info && Boolean(formik.errors.add_info)}
              helperText={formik.touched.add_info && formik.errors.add_info}
            />
          </Grid>
        </Grid>
      </Box>
      <DialogActions>
        <Button onClick={() => formik.handleSubmit()}>Creation</Button>
      </DialogActions>
    </Dialog>
  );
}

export default TaskDialog;
