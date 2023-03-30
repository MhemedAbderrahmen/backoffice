import TaskDatagrid from '@/components/datagrid/task/TaskDatagrid';
import TaskDialog from '@/components/dialog/task/TaskDialog';
import PageHeader from '@/components/headers/page/PageHeader';
import BaseLoader from '@/components/loader/base/BaseLoader';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import BackofficeService from 'src/services/BackofficeService';
import IJobData from 'src/types/job.type';
export default function Tasks() {
  const [tasks, setTasks] = React.useState<IJobData[]>();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let res: any;
    res = await BackofficeService.fetchAllJobs();
    setTasks(res.data.data);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ height: '98vh' }}>
      <PageHeader
        icon={<FormatListBulletedRoundedIcon />}
        text="Gestions des taches"
      />

      <Box
        sx={{
          width: '100%',
          mb: 2,
          mt: 2,
          textAlign: 'right',
        }}
      >
        <Button onClick={handleClickOpen}>Creation</Button>
      </Box>
      {tasks ? <TaskDatagrid data={tasks} /> : <BaseLoader />}

      <TaskDialog onClose={handleClose} open={open} />
    </Box>
  );
}
