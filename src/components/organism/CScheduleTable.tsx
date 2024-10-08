import CDatePicker from '@/components/atom/CDatePicker';
import CScheduleDateBox from '../molecules/LJW/ShowSchedule/CScheduleDateBox';
import { useEffect, useState } from 'react';
import CScheduleTimeLineList from '../molecules/LJW/ShowSchedule/CScheduleTimeLineList';
import dayjs, { Dayjs } from 'dayjs';
import { Box, ThemeProvider, Typography } from '@mui/material';
import { theme } from '@/constants/theme';
import { CustomerInfo, engineerInfo, SchInfoModel, TODAY } from '@/constants/definition';
import { StyledScheduleTable } from '@/styles/customize';

const CScheduleTable = () => {
  // const [selectedDate, setSelectedDate] = useState<Dayjs | null>(TODAY);
  // const [engineers, setEngineers] = useState<engineerInfo[]>([]);
  // const [customerInfo, setCustomerInfo] = useState<CustomerInfo[]>([]);
  // const [loading, setLoading] = useState(true);

  const [scheduleState, setScheduleState] = useState<SchInfoModel>({
    selectedDate: TODAY,
    engineers: [],
    customerInfo: [],
    isLoading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setScheduleState((prevState) => ({ ...prevState, isLoading: true }));
        const resEngineers = await fetch('api 주소 입력');
        const engineersData: engineerInfo[] = await resEngineers.json();

        const resCustomers = await fetch('api 주소 입력');
        const customersData: CustomerInfo[] = await resCustomers.json();

        setScheduleState((prevState) => ({
          ...prevState,
          engineers: engineersData,
          customerInfo: customersData,
          isLoading: false,
        }));
      } catch (error) {
        console.error('데이터 호출 오류', error);
        setScheduleState((prevState) => ({ ...prevState, isLoading: false }));
      }
    };
    fetchData();
  }, []);

  const handleSelect = (date: Dayjs | null) => {
    setScheduleState((prevState) => ({
      ...prevState,
      selectedDate: date,
    }));
  };

  const isLoading = () => {
    if (scheduleState.isLoading) {
      return <div>loading...</div>;
    }

    if (scheduleState.engineers.length > 0) {
      return (
        <CScheduleTimeLineList
          selectDate={formattedDate}
          engineers={scheduleState.engineers}
          orderInfo={scheduleState.customerInfo}
        />
      );
    }

    return (
      <Typography variant="h4" component="div">
        데이터 없음
      </Typography>
    );
  };

  const formattedDate = scheduleState.selectedDate
    ? scheduleState.selectedDate.format('YYYY-MM-DD')
    : '';

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ ...StyledScheduleTable }}>
        <CDatePicker
          value={scheduleState.selectedDate}
          handleChange={handleSelect}
          mindateValue={dayjs('1900-01-01')}
        />
        <Box>
          <CScheduleDateBox dateInfo={scheduleState.selectedDate} />
          {isLoading()}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CScheduleTable;
