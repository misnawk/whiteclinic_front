import { Dayjs } from 'dayjs';
import { CustomerInfo, engineerInfo } from './definition';

//전체 스케쥴 state 관리를 위한 모델 선언
export type SchInfoModel = {
  selectedDate: Dayjs | null;
  engineers: engineerInfo[];
  customerInfo: CustomerInfo[];
  isLoading: boolean;
};

//기사 상세 페이지 state 관리를 위한 모델 선언
export type EngSchModel = {
  engineer: engineerInfo | null;
  customerInfo: CustomerInfo[];
  selectedDate: Dayjs | null;
};

//스케쥴 편집 state 관리를 위한 모델 선언
export type EditSchModel = {
  selectedDate: Dayjs | null;
  selectEng: engineerInfo | null;
  startTime: Dayjs | null;
  endTime: Dayjs | null;
  selectCustomer: CustomerInfo | null;
};
