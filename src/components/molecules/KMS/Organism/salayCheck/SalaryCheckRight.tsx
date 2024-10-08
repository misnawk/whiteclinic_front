import CInput from '@/components/atom/CInput';
import { SalaryCheckRightStyle } from '@/styles/customize';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';

export const RightRows = [
  {
    row: ['합계수당', '수당률', '수당금액', '지급요일', '지급여부'], //기본적인 틀은 프론트에서 고정
    first: [700000, 50, 350000, '금요일', '지급완료'], // 틀에 맞게 배열의 주소값으로 데이터 쏴줌
  },
];

export const SalaryCheckRight = () => {
  const rightData = Object.keys(RightRows[0].first); // 오른쪽 정보
  const [isModifiableRight, setIsModifiableRight] = useState<boolean[]>([]); //연필 오른쪽

  const [rightInputs, setRightInputs] = useState(rightData); //오른쪽인풋

  useEffect(() => {
    // const fetchEngineerSalaryEdit
  });

  useEffect(() => {
    setIsModifiableRight(new Array(RightRows[0].first.length).fill(false)); //연필모양 (오른쪽)
    // setLeftInputs(new Array(value.length).fill(false)); // 인풋 (왼쪽)
    setRightInputs(new Array(RightRows[0].first.length).fill('')); // 인풋 (오른쪽)
  }, []);

  const handleModifyRight = (index: number) => {
    setIsModifiableRight((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  //오른쪽 인풋상태함수
  const handleRightInput = (index: number, value: string) => {
    setRightInputs((prev) => {
      const newInputs = [...prev];
      newInputs[index] = value;
      console.log(rightInputs);
      return newInputs;
    });
  };

  return (
    <div>
      <TableContainer sx={{ display: 'flex', flexDirection: 'column' }}>
        <Table>
          <TableBody>
            {RightRows[0].row.map((right, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{
                    ...SalaryCheckRightStyle,
                  }}
                >
                  {right}
                </TableCell>
                <TableCell sx={{ fontSize: 20, letterSpacing: 3 }}>
                  <CInput
                    variableValue={RightRows[0].first[index]}
                    isReadOnly={!isModifiableRight[index]}
                    isModifiable={true}
                    handleInput={(e) => handleRightInput(index, e.target.value)}
                    modifyInput={() => handleModifyRight(index)}
                    adornment={index === 0 || index === 2 ? '원' : index === 1 ? '%' : ''}
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
