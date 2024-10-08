// import CDatePicker from '@/components/atom/CDatePicker';
// import { engineerInfo, TODAY } from '@/constants/definition';
// import { Box } from '@mui/material';
// import dayjs, { Dayjs } from 'dayjs';
// import { useState } from 'react';
// import CCardList from '../molecules/LJW/showCard/CCardList';
// import { CCardAtomProps } from '../molecules/LJW/showCard/CCardAtom';
// import { useRouter } from 'next/router';

// type CEngineerCardTableProps = {
//   engineers: engineerInfo[];
// };
// const CEngineerCardTable = ({ engineers }: CEngineerCardTableProps) => {
//   const [selectDate, setSelectDate] = useState<Dayjs | null>(dayjs());
//   const router = useRouter();

//   if (!engineers) {
//     return <div></div>;
//   }

//   const handleSelectDate = (date: Dayjs | null) => setSelectDate(date);
//   const handleEngineerClick = (engineer: engineerInfo) => {
//     const formattedDate = selectDate ? selectDate.format('YYYY-MM-DD') : '';
//     router.push({
//       pathname: `/s_cardInfo/${engineer.engineerId}`,
//       query: { date: formattedDate },
//     });
//   };

//   const formattedDate = selectDate ? selectDate.format('YYYY-MM-DD') : '';
//   const formattedDay = selectDate ? selectDate.locale('ko').format('ddd') : '';

//   const cardInfo: CCardAtomProps = {
//     engineerName: '',
//     imgURL: '',
//     cardContent: '',
//     selectDate: formattedDate,
//     engineerId: 0,
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'row', gap: '6px' }}>
//       <CDatePicker
//         value={selectDate}
//         handleChange={handleSelectDate}
//         mindateValue={dayjs('1900-01-01')}
//       />
//       <CCardList
//         cardatomprops={cardInfo}
//         selectDay={formattedDay}
//         selectDate={formattedDate}
//         engineer={engineers}
//         onEngineerClick={handleEngineerClick}
//       />
//     </Box>
//   );
// };

// export default CEngineerCardTable;
export {};
