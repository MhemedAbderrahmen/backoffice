import BaseDatagrid from '@/components/datagrid/base/BaseDatagrid';
import BaseDialog from '@/components/dialog/base/BaseDialog';
import PageHeader from '@/components/headers/page/PageHeader';
import BaseLoader from '@/components/loader/base/BaseLoader';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import BackofficeService from 'src/services/BackofficeService';
import IUserData from 'src/types/user.type';

export default function Users() {
  const [users, setUsers] = React.useState<IUserData[]>();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let res: any;
    res = await BackofficeService.fetchAllUsers();
    setUsers(res.data.data);
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
        text="Gestion des techniciens"
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
      {users ? <BaseDatagrid data={users} /> : <BaseLoader />}

      <BaseDialog onClose={handleClose} open={open} />
    </Box>
  );
}
