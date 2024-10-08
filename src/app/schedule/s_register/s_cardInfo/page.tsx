'use client';

import CEngSchedule from '@/components/molecules/LJW/showCard/CEngSchedule';
import { engineerInfo } from '@/constants/definition';
import dayjs, { Dayjs } from 'dayjs';

type pageProps = {
  engineer: engineerInfo;
  selectedDate: string;
};
export default function Page({ engineer, selectedDate }: pageProps) {
  const parsedDate: Dayjs | null = dayjs(selectedDate);

  // return <CEngSchedule engineerId={engineer.engineerId} selectedDate={parsedDate} />;
}
