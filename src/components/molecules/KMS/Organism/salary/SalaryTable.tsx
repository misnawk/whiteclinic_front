import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import CDropDown from '@/components/atom/CDropdown';
import CInput from '@/components/atom/CInput';
import { AllowanceRates, SalaryTableProps, WeekDays } from '@/constants/definition';
import { createSalaryRow } from '@/util/SalaryTableUtil';
import { SalaryTableStyle } from '@/styles/customize';

export const SalaryTable = ({ salaryData, onSalaryChange }: SalaryTableProps) => {
  const rows = [
    createSalaryRow(
      '기사성함',
      <CInput
        type="text"
        labelProp="기사 성함"
        placeholderProp="이름을 입력하세요"
        value={salaryData.name}
        handleInput={(e) => onSalaryChange('name', e.target.value)}
      />
    ),
    createSalaryRow(
      '수당률',
      <CDropDown
        contentName="수당률"
        contentList={AllowanceRates}
        selectedValue={salaryData.rate}
        handleChange={(e) => onSalaryChange('rate', e.target.value)}
      />
    ),
    createSalaryRow(
      '급여요일',
      <CDropDown
        contentName="급여요일"
        contentList={WeekDays}
        selectedValue={salaryData.payday}
        handleChange={(e) => onSalaryChange('payday', e.target.value)}
      />
    ),
  ];

  return (
    <TableContainer sx={{ width: '430px' }}>
      <Table>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.label}>
              <TableCell
                sx={{
                  ...SalaryTableStyle,
                }}
              >
                {row.label}
              </TableCell>
              <TableCell>{row.element}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
