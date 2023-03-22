// make sure you include the timeline stylesheet or the timeline will not be styled
import InterventionForm from '@/components/forms/intervention/InterventionForm';
import PageHeader from '@/components/headers/page/PageHeader';
import BiotechRoundedIcon from '@mui/icons-material/BiotechRounded';
import Box from '@mui/material/Box';
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import Timeline, {
  CustomMarker,
  DateHeader,
  TimelineHeaders,
  TimelineMarkers,
} from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import { technicians } from 'src/data/mocks';
import InterventionsContext from 'src/state/interventions/InterventionsContext';

export interface IBaseCalendar {
  sampleTextProp?: string;
}

const BaseCalendar: React.FC<IBaseCalendar> = () => {
  const { interventions } = useContext(InterventionsContext);

  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    console.log('INTERVENTIONS UPDATED');
  }, [interventions]);

  return (
    <Box>
      <PageHeader icon={<BiotechRoundedIcon />} text="Manage Iterventions" />

      <Box
        sx={{
          backgroundColor: 'white',
          minHeight: '600px',
          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        }}
        p={3}
        borderRadius={2}
      >
        <InterventionForm />
        <Timeline
          groups={technicians}
          items={interventions}
          defaultTimeStart={moment().add(-12, 'hour')}
          defaultTimeEnd={moment().add(12, 'hour')}
        >
          <TimelineHeaders
            style={{
              backgroundColor: '#1976D2',
              borderRadius: 8,
              border: 'none',
            }}
          >
            <DateHeader unit="primaryHeader" />
            <DateHeader />
          </TimelineHeaders>
          <TimelineMarkers>
            <CustomMarker date={new Date()}>
              {({ styles, date }) => {
                const customStyles = {
                  ...styles,
                  backgroundColor: 'red',
                  width: '3px',
                };
                return (
                  <div
                    style={customStyles}
                    onClick={() => {
                      console.log('Hello world');
                    }}
                  />
                );
              }}
            </CustomMarker>{' '}
          </TimelineMarkers>
        </Timeline>
      </Box>
    </Box>
  );
};

export default BaseCalendar;
