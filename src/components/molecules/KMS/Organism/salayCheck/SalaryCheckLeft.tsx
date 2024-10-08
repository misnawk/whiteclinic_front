import CInput from '@/components/atom/CInput';
import { SalaryCheckLeftStyle } from '@/styles/customize';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { error } from 'console';
import { useEffect, useState } from 'react';
import { EngineerSalary } from '../../../../../../Backend/white-clinic-back/src/whiteClinic/entity/EngineerSalary.entity';

export const SalaryCheckLeft = () => {
  const [isModifiableLeft, setIsModifiableLeft] = useState<boolean[]>([]); //연필 상태관리
  const [input, setInput] = useState<string[]>([]);
  const [salaryData, setSalaryData] = useState<EngineerSalary[]>([]); //

  //이게 제일먼저 실행되어야한다.
  useEffect(() => {
    const fetchEngineerSalary = async () => {
      const id = localStorage.getItem('id');
      if (!id) {
        console.error('선택된 아이디가 없습니다.');
        return;
      }
      try {
        const response = await fetch(`http://localhost:9090/engineer/salary/${id}`);
        if (!response.ok) {
          throw new Error('수당정보를 가져오지 못했습니다.');
        }
        const data = await response.json();
        setSalaryData(data);
      } catch (error) {
        console.error('오류', error);
      }
    };
    fetchEngineerSalary();
  }, []);

  useEffect(() => {
    setIsModifiableLeft(new Array(salaryData.length).fill(false)); //연필모양 (왼쪽)
  }, [salaryData.length]);

  //왼쪽 연필상태 관리 함수
  const handleModifyLeft = (index: number) => {
    setIsModifiableLeft((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  // 왼쪽 인풋상태함수
  const handleLeftInput = (index: number, value: string) => {
    setInput((prev) => {
      const newInputs = [...prev];
      newInputs[index] = value;
      console.log(input);
      return newInputs;
    });
  };
  return (
    <div>
      <TableContainer sx={{ display: 'flex', flexDirection: 'column' }}>
        <Table>
          <TableBody>
            {salaryData.map((item, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    ...SalaryCheckLeftStyle,
                  }}
                >
                  {item.salaryDay}
                </TableCell>
                <TableCell sx={{ fontSize: 20, letterSpacing: 3 }}>
                  <CInput
                    key={index}
                    variableValue={item.daySalary}
                    isReadOnly={!isModifiableLeft[index]}
                    isModifiable={true}
                    type="number"
                    modifyInput={() => handleModifyLeft(index)}
                    handleInput={(e) => handleLeftInput(index, e.target.value)}
                    adornment="원"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
