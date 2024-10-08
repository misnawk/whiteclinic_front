import CDatePicker from '@/components/atom/CDatePicker';
import { CustomerInfo, engineerInfo, TODAY } from '@/constants/definition';
import { theme } from '@/constants/theme';
import { StyledScheduleTable } from '@/styles/customize';
import { Box, ThemeProvider } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import CScheduleTimeLine from '../ShowSchedule/CScheduleTimeLine';
import CShowEngineerInfo from '../EditSchedule/CShowEngineerInfo';
import { useRouter } from 'next/router';
import { EngSchModel } from '@/constants/manageState';

const CEngSchedule = () => {
  const router = useRouter();
  const { engineerId, date } = router.query;

  const [engInfo, setEngInfo] = useState<EngSchModel>({
    engineer: null,
    customerInfo: [],
    selectedDate: date ? dayjs(date as string) : null,
  });

  useEffect(() => {
    if (engineerId) {
      const fetchEngineerInfo = async () => {
        try {
          const response = await fetch(`api주소`);
          if (response.ok) {
            const engineerData = await response.json();
            setEngInfo((prevState) => ({
              ...prevState,
              engineer: engineerData,
            }));
          } else {
            console.error('기사 정보 불러오기 실패');
          }
        } catch (error) {
          console.error('기사 정보 패치 오류: ', error);
        }
      };
      fetchEngineerInfo();
    }
  }, [engineerId]);

  const handleSelectDate = (date: Dayjs | null) => {
    setEngInfo((prevState) => ({
      ...prevState,
      selectedDate: date,
    }));
  };
  const formattedDate = engInfo.selectedDate ? engInfo.selectedDate.format('YYYY-MM-DD') : '';

  if (!engInfo.engineer) {
    return (
      <Box>
        <CDatePicker
          value={engInfo.selectedDate}
          handleChange={handleSelectDate}
          mindateValue={dayjs('1900-01-01')}
        />
        <Box>정보 없음</Box>
      </Box>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ ...StyledScheduleTable }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Box>
            <CShowEngineerInfo engineer={engInfo.engineer} />
          </Box>
          <CDatePicker
            value={engInfo.selectedDate}
            handleChange={handleSelectDate}
            mindateValue={dayjs('1900-01-01')}
          />
        </Box>
        <CScheduleTimeLine
          engineerName={engInfo.engineer.engineerName}
          selectDate={formattedDate}
          orderInfo={engInfo.customerInfo}
        />
      </Box>
    </ThemeProvider>
  );
};

export default CEngSchedule;
