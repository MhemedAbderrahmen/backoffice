import InputErrors from '@/components/errors/input/InputErrors';
import SelectTextfield from '@/components/textfield/select/SelectTextfield';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { Box } from '@mui/system';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Form, Formik } from 'formik';
import react, { useContext, useEffect, useRef, useState } from 'react';
import IInterventionData from 'src/const/intervention.type';
import BackofficeService from 'src/services/BackofficeService';
import InterventionsContext from 'src/state/interventions/InterventionsContext';
import IJobAssigner from 'src/types/job.assigner.type';
import IJobData from '../../../types/job.type';
import IUserData from '../../../types/user.type';
import { FORM_VALIDATION, initialValues } from './IterventionForm.hooks';
export interface IInterventionForm {
  sampleTextProp?: string;
}
const Alert = react.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const InterventionForm: React.FC<IInterventionForm> = ({ sampleTextProp }) => {
  const loading = useRef(true);
  const { pushToInterventions } = useContext(InterventionsContext);

  const [bodyToSend, setBodyToSend] = useState<IJobAssigner>({
    assignTo: [],
    jobId: '',
    master: '',
  });
  const [techniciansLogin, setTechniciansLogin] = useState<string[]>([]);
  const [techs, setTechs] = useState<IUserData[]>([]);
  const [jobs, setJobs] = useState<IJobData[]>([]);
  const [jobsReferences, setJobsReferences] = useState<string[]>([]);
  const [technician, setTechnician] = useState<String>('');
  const [task, setTask] = useState<String>('');
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const insertIntervention = (
    intervention: IInterventionData
  ): IInterventionData => {
    console.log(intervention);
    pushToInterventions(intervention);
    return intervention;
  };

  const fetchTechnicians = async () => {
    let res: any;
    res = await BackofficeService.fetchAllUsers();
    setTechs(res.data.data);
    res.data.data.map((item: IUserData) => techniciansLogin.push(item._id));
  };
  const fetchJobs = async () => {
    let res: any;
    res = await BackofficeService.fetchAllJobs();
    setJobs(res.data.data);
    res.data.data.map((item: IJobData) => jobsReferences.push(item.reference));
  };

  useEffect(() => {
    if (loading.current) {
      console.log('Loading');
      loading.current = false;
      fetchTechnicians();
      fetchJobs();
    }
  }, []);

  return (
    <Box mb={2}>
      {!loading.current ? (
        <Accordion
          elevation={0}
          sx={{
            backgroundColor: '#F7F6FA',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                width: '100%',
                fontWeight: 'bold',
                flemdhrink: 0,
              }}
            >
              Creation Intervention
            </Typography>
          </AccordionSummary>
          <Formik
            initialValues={initialValues}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values: IInterventionData) => {
              insertIntervention(values);
            }}
          >
            {(formikProps) => {
              const { handleChange, errors, isSubmitting } = formikProps;
              return (
                <Form id="add-form">
                  <AccordionDetails>
                    <Grid container maxWidth={'xl'} spacing={3}>
                      <Grid item xs={12} md={4}>
                        {techniciansLogin ? (
                          <SelectTextfield
                            title={'Technicians'}
                            options={techniciansLogin}
                            onChange={(e: SelectChangeEvent) => {
                              setTechnician(e.target.value);

                              bodyToSend.assignTo.push(e.target.value);
                              setBodyToSend({
                                assignTo: bodyToSend.assignTo,
                                jobId: bodyToSend.jobId,
                                master: '',
                              });
                            }}
                          />
                        ) : null}
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <SelectTextfield
                          title={'Intervention'}
                          options={jobsReferences}
                          onChange={(e: SelectChangeEvent) => {
                            setTask(e.target.value);
                            const foundObject = jobs.find(
                              (obj) => obj.reference === e.target.value
                            );

                            if (foundObject) {
                              const id = foundObject._id;
                              setBodyToSend({
                                assignTo: bodyToSend.assignTo,
                                jobId: id,
                                master: '',
                              });
                            } else {
                              console.log('Object not found');
                            }
                          }}
                        />
                      </Grid>

                      <Grid item md={4}>
                        <DatePicker
                          onChange={(newValue) =>
                            formikProps.setFieldValue('start_time', newValue)
                          }
                          value={formikProps.values.start_time}
                          sx={{ width: '100%' }}
                          label="Start date"
                        />
                        <InputErrors
                          display={
                            formikProps.touched.start_time &&
                            Boolean(formikProps.errors.start_time)
                          }
                          text={'Date incorrecte'}
                        />
                      </Grid>

                      <Grid item md={4}>
                        <DatePicker
                          onChange={(newValue) =>
                            formikProps.setFieldValue('end_time', newValue)
                          }
                          value={formikProps.values.end_time}
                          sx={{ width: '100%' }}
                          label="End date"
                        />
                        <InputErrors
                          display={
                            formikProps.touched.start_time &&
                            Boolean(formikProps.errors.start_time)
                          }
                          text={'Date incorrecte'}
                        />
                      </Grid>
                      <Grid item md={12}>
                        <Box sx={{ width: '100%', textAlign: 'center' }}>
                          <Button
                            type="submit"
                            onClick={async () => {
                              let res: any;

                              res = await BackofficeService.assignJob(
                                bodyToSend
                              );

                              if (res.data.statusCode === 200) {
                                handleClick();
                              }
                            }}
                          >
                            Insert Intervention
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Form>
              );
            }}
          </Formik>
        </Accordion>
      ) : null}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Assigned Successfully
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default InterventionForm;
