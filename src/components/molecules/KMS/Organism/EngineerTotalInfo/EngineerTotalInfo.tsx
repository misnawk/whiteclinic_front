import { Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { EngineerInfo } from './engineerInfo/EngineerInfo';
import { EngineerTotalInfoStyle } from '@/styles/customize';
import { useEffect, useState } from 'react';
import { CheckboxList } from '../../Melecules/engineerInfo/CheckboxList';

export const EngineerTotalInfo = () => {
  return (
    <Box
      sx={{
        ...EngineerTotalInfoStyle,
      }}
    >
      <Box sx={{ mb: 3 }}>
        <CheckboxList />
      </Box>

      <EngineerInfo />
    </Box>
  );
};
