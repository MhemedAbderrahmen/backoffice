// make sure you include the timeline stylesheet or the timeline will not be styled
import InterventionForm from '@/components/forms/intervention/InterventionForm';
import PageHeader from '@/components/headers/page/PageHeader';
import BiotechRoundedIcon from '@mui/icons-material/BiotechRounded';
import Box from '@mui/material/Box';
import moment from 'moment';
import Timeline, {
  DateHeader,
  TimelineHeaders,
  TimelineMarkers,
  TodayMarker,
} from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
const groups = [
  { id: 1, title: 'Mohammed Ali' },
  {
    id: 2,
    title: 'Mohammed Salah',
  },
];
export interface IBaseCalendar {
  sampleTextProp: string;
}
const items = [
  {
    id: 1,
    group: 1,
    title: 'Inter 1',
    start_time: moment().add(6, 'hour'),
    end_time: moment().add(7, 'hour'),
    itemProps: {
      style: {
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      },
    },
  },
  {
    canMove: true,
    id: 2,
    group: 2,
    title: 'Inter 2',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(0.5, 'hour'),
  },
];
const BaseCalendar: React.FC<IBaseCalendar> = ({ sampleTextProp }) => {
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
          groups={groups}
          items={items}
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
            <TodayMarker date={moment().toDate()} />
          </TimelineMarkers>
        </Timeline>
      </Box>
    </Box>
  );
};

export default BaseCalendar;
