import CCheckbox from '@/components/atom/CCheckbox';
import CDropDown from '@/components/atom/CDropdown';
import { Box } from '@mui/material';
import { rightModel, TODAY, WeekDays } from '@/constants/definition';
import CDatePicker from '@/components/atom/CDatePicker';
import { useState } from 'react';
import CButton from '@/components/atom/CButton';
import dayjs, { Dayjs } from 'dayjs';
import { RightInfoComponentStyleOne, RightInfoComponentStyleTwo } from '@/styles/customize';

export const RightInfoComponent = () => {
  const [rightModel, setRightModel] = useState<rightModel>({
    regularDay: '',
    irregularDayGo: TODAY,
    irregularDayEnd: TODAY,
  });

  //드롭다운,체크박스 상태관리 함수
  const rightModelHandler = (key: keyof rightModel, value: string | boolean | Dayjs | null) => {
    setRightModel((prev) => ({ ...prev, [key]: value }));
    console.log(rightModel[key]);
  };

  const rightinfo = [
    [
      '정기휴무',
      <CDropDown
        key="weekdays"
        contentList={WeekDays}
        contentName="요일 선택"
        handleChange={(e) => rightModelHandler('regularDay', e.target.value)}
      />,
    ],

    [
      '비정기휴무',
      <CDatePicker
        key="irregularDayGo"
        label="출발 날짜"
        value={rightModel.irregularDayGo}
        handleChange={(date) => rightModelHandler('irregularDayGo', date)}
      />,

      <CDatePicker
        key="irregularDayEnd"
        label="도착 날짜"
        mindateValue={rightModel.irregularDayGo}
        handleChange={(date) => rightModelHandler('irregularDayEnd', date)}
      />,
    ],
  ];

  return (
    <Box
      sx={{
        ...RightInfoComponentStyleOne,
      }}
    >
      {rightinfo.map((item, index) => (
        <Box
          key={index}
          sx={{
            ...RightInfoComponentStyleTwo,
          }}
        >
          {item}
        </Box>
      ))}
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <CButton content="휴무등록" type="button" />
      </Box>
    </Box>
  );
};
