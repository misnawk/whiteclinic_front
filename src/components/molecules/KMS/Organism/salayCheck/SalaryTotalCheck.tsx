import CButton from '@/components/atom/CButton';
import CInput from '@/components/atom/CInput';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import { SalaryCheckLeft } from './SalaryCheckLeft';
import { SalaryCheckRight } from './SalaryCheckRight';
import { SalaryTotalCheckStyle } from '@/styles/customize';

export const SalaryTotalCheck = () => {
  return (
    <Box
      sx={{
       ...SalaryTotalCheckStyle
      }}
    >
      <SalaryCheckLeft />
      <SalaryCheckRight />
      <CButton content="수정완료" />
    </Box>
  );
};
