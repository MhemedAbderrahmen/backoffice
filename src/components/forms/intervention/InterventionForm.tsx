import InputErrors from '@/components/errors/input/InputErrors';
import SelectTextfield from '@/components/textfield/select/SelectTextfield';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControl,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Form, Formik } from 'formik';
import { useContext, useEffect, useRef, useState } from 'react';
import IInterventionData from 'src/const/intervention.type';
import { technicians } from 'src/data/mocks';
import InterventionsContext from 'src/state/interventions/InterventionsContext';
import { FORM_VALIDATION, initialValues } from './IterventionForm.hooks';
interface IInterventionForm {
  sampleTextProp?: string;
}

const InterventionForm: React.FC<IInterventionForm> = ({ sampleTextProp }) => {
  const loading = useRef(true);
  const { pushToInterventions } = useContext(InterventionsContext);
  const [techs, setTechs] = useState<string[]>([]);
  const insertIntervention = (
    intervention: IInterventionData
  ): IInterventionData => {
    console.log(intervention);
    pushToInterventions(intervention);
    return intervention;
  };
  const fetchTechnicians = () => {
    technicians.map(async (tech) => await techs.push(tech.title));
  };
  useEffect(() => {
    if (loading.current) {
      console.log('Loading');
      loading.current = false;
      fetchTechnicians();
    }
  }, []);

  return (
    <Box mb={2}>
      {!loading.current ? (
        <Accordion
          elevation={0}
          sx={{
            bomdhadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
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
              Create Intervention
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
                        <SelectTextfield
                          options={techs}
                          onChange={(e) => {
                            console.log(e);

                            // formikProps.setFieldValue(
                            //   'group',
                            //   technicians[e.target.value].id
                            // );
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <FormControl fullWidth>
                          <InputLabel htmlFor="my-input">
                            Intervention title
                          </InputLabel>
                          <TextField
                            name="title"
                            error={
                              formikProps.touched.title &&
                              Boolean(formikProps.errors.title)
                            }
                            onChange={handleChange}
                            value={formikProps.values.title}
                            defaultValue={''}
                          />
                          <InputErrors
                            display={
                              formikProps.touched.title &&
                              Boolean(formikProps.errors.title)
                            }
                            text={formikProps.errors.title}
                          />
                        </FormControl>
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
                          <Button type="submit">Insert Intervention</Button>
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
    </Box>
  );
};

export default InterventionForm;
