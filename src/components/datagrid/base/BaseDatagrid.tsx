import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';

export interface IBaseDatagrid {
  data: any;
}

const BaseDatagrid: React.FC<IBaseDatagrid> = ({ data }) => {
  const getRowId = (row: any) => row._id;
  React.useEffect(() => {
    console.log(data);
  }, [data]);

  const columns: GridColDef[] = [
    {
      field: '_id',
      headerName: 'ID',
      width: 150,
      renderCell: (id: any) => {
        let xId = data.indexOf(id.row) + 1;
        return xId;
      },
    },
    { field: 'login', headerName: 'Login', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'password', headerName: 'Mot de passe', width: 150 },
    { field: 'active', headerName: 'Status', width: 150 },
  ];
  return (
    <Box sx={{ height: 600, width: '100%' }}>
      {data ? (
        <DataGrid
          sx={{ backgroundColor: 'white' }}
          rows={data}
          columns={columns}
          getRowId={getRowId}
          autoHeight
        />
      ) : null}
    </Box>
  );
};
export default BaseDatagrid;
