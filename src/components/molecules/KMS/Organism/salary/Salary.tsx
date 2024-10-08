import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { ButtonTwo } from '../../Melecules/engineer/ButtonTwo';
import { CModal } from '../../Melecules/engineer/CModal';
import { SalaryTable,  } from './SalaryTable';
import { SalaryModel } from '@/constants/definition';

export const Salary = () => {
  const [modal, setModal] = useState(false); // 모달상태 관리
  const [salaryData, setSalaryData] = useState<SalaryModel>({
    name: '',
    rate: '',
    payday: '',
  });

  const handleSalaryChange = (key: keyof SalaryModel, value: string) => {
    setSalaryData((prev) => ({ ...prev, [key]: value }));
    console.log(value);
  };

  return (
    <Box>
      <SalaryTable salaryData={salaryData} onSalaryChange={handleSalaryChange} />
      <ButtonTwo
        leftButton="취소"
        onLeftButton={() => setModal(false)}
        rightButton="등록"
        onRightButton={() => setModal(true)}
      />
      <CModal title="해당 내용으로 급여사항을 등록하겠습니까?" open={modal}>
        {ButtonTwo({
          leftButton: '아니오',
          onLeftButton: () => setModal(false),
          leftBgColor: 'gray',
          leftColor: 'black',
          rightButton: '등록',
        })}
      </CModal>
    </Box>
  );
};
