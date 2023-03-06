import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import Box from '@mui/material/Box';
export interface IBaseCalendar {
  sampleTextProp: string;
}

const BaseCalendar: React.FC<IBaseCalendar> = ({ sampleTextProp }) => {
  return (
    <Box sx={{ backgroundColor: 'white' }} p={3} borderRadius={3}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Technician X: Creation du filtre', date: '2023-03-03' },
          { title: 'Technician Y: Creation du filtre', date: '2023-03-03' },
          { title: 'Technician Z: Creation du filtre', date: '2023-03-04' },
          { title: 'Mise a jours', date: '2023-03-03' },
        ]}
      />
    </Box>
  );
};

export default BaseCalendar;
