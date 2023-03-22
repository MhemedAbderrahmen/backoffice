import moment from 'moment';
import IInterventionData from 'src/const/intervention.type';
import ITechnicianData from 'src/const/technician.type';

export const technicians: ITechnicianData[] = [
  { id: 1, title: 'Timmy', master: true },
  { id: 2, title: 'Karee', master: true },
  { id: 3, title: 'Earl', master: true },
  { id: 4, title: 'Pier', master: true },
  { id: 5, title: 'Lidia', master: false },
  { id: 6, title: 'Lorraine', master: true },
  { id: 7, title: 'Eddi', master: false },
  { id: 8, title: 'Ky', master: true },
  { id: 9, title: 'Lynde', master: false },
  { id: 10, title: 'Jelene', master: false },
];

export let interventions: IInterventionData[] = [
  {
    id: 1,
    group: 1,
    title: 'Inter 1',
    start_time: moment().add(6, 'hour'),
    end_time: moment().add(7, 'hour'),
  },
  {
    id: 2,
    group: 2,
    title: 'Inter 2',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(0.5, 'hour'),
  },
];
