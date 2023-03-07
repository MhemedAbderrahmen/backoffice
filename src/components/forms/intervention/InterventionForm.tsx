import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';

export interface IInterventionForm {
  sampleTextProp?: string;
}

const InterventionForm: React.FC<IInterventionForm> = ({ sampleTextProp }) => {
  return (
    <Box>
      <Accordion elevation={0} sx={{ border: 'none' }}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <Typography sx={{ width: '85%', flexShrink: 0 }}>
            Interventions List
          </Typography>
          <Button sx={{ width: '15%' }}>Add Intervention</Button>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container maxWidth={'xl'} spacing={3}>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">
                  We will never share your email.
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">
                  We will never share your email.
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">
                  We will never share your email.
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">
                  We will never share your email.
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default InterventionForm;
