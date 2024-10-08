import CCheckbox from '@/components/atom/CCheckbox';
import { engineerName } from '@/constants/definition';
import { CheckBoxListStyle } from '@/styles/customize';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useEngineerStore } from '../../Organism/EngineerTotalInfo/stoeres/EngineerStore';

export const CheckboxList = () => {
  const { engineerNameId, fetchEngineer } = useEngineerStore(); //이름배열  가져오면 여기에 저장
  const [nameList, setNameList] = useState<boolean[]>(Array(engineerNameId.length).fill(false)); // 상태관리
  const isAnyChecked = nameList.some((isCheckd) => isCheckd); //리스트에 하나만 체크되게끔
  const [selectedEngineer, setSelectedEngineer] = useState<{ id: number; name: string } | null>(
    null
  ); //선택한 체크박스

  //전역으로 만든 함수를 실행시켜준다.
  useEffect(() => {
    fetchEngineer(); // 전역에서 정보를 가져오는 함수실행
  }, [fetchEngineer]);

  //useEngineerStore이 먼저 실행되고 나서야 lenght를 구할수있으니 조건문으로 순서를 늦춰준다.
  useEffect(() => {
    if (engineerNameId.length > 0) {
      setNameList(new Array(engineerNameId.length).fill(false));
    }
  }, [engineerNameId]);

  //로컬에 담는용도
  useEffect(() => {
    if (selectedEngineer) {
      localStorage.setItem('name', selectedEngineer.name);
      localStorage.setItem('id', selectedEngineer.id.toString());
    } else {
      localStorage.removeItem('id');
      localStorage.removeItem('name');
    }
  }, [selectedEngineer]);

  //체크박스 상태관리 함수
  const toggle = (index: number, id: number, name: string) => {
    console.log({ index, id, name });

    setNameList((prev) => {
      const newState = [...prev]; //최신화값을 newState에 넣어준다.
      newState[index] = !newState[index]; // boolean 반전시켜준다.

      if (newState[index]) {
        setSelectedEngineer({ id, name });
      } else {
        setSelectedEngineer(null);
      }

      return newState;
    });
  };

  //이름 리스트 뿌려주기
  const EngineerNames = () => {
    return engineerNameId.map((engineerData, index) => (
      <Box
        key={index}
        sx={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <CCheckbox<engineerName>
          key={index}
          label={engineerData.name}
          isChecked={nameList[index]}
          width="100px"
          handleChange={() => toggle(index, engineerData.id, engineerData.name)}
          isAnyChecked={isAnyChecked ? !nameList[index] : false}
        />
      </Box>
    ));
  };

  return (
    <Box
      sx={{
        ...CheckBoxListStyle,
      }}
    >
      <EngineerNames />
    </Box>
  );
};

export {};
