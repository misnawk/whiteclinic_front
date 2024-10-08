// import CButton from '@/components/atom/CButton';
// import CInput from '@/components/atom/CInput';
// import { leftinfo } from '@/constants/definition';
// import {
//   LeftInfoComponentStyleOne,
//   LeftInfoComponentStyleThree,
//   LeftInfoComponentStyleTWo,
// } from '@/styles/customize';
// import { Box } from '@mui/material';
// import { useEffect, useState } from 'react';
// // import { useEngineerStore } from '../stoeres/EngineerStore';

// export const LeftInfoComponent = () => {
//   //배열로 상태를 담아줄 그릇생성
//   const [inputState, setInputState] = useState<string[]>(Array(4).fill(''));
//   // const { engineers, fetchEngineer } = useEngineerStore();
//   const [selectedId, setSelectedId] = useState<number | null>(null); //이전의 값을 담고있다.

//   //전역에서 가져오는함수
//   useEffect(() => {
//     fetchEngineer();
//   }, [fetchEngineer]);

//   //로컬에서 선택된 이름 가져오는 함수 0.5초마다갱신
//   useEffect(() => {
//     const checkLocalStorage = () => {
//       const selectedEngineerId = localStorage.getItem('id');
//       const selectedEngineerName = localStorage.getItem('name');

//       //로컬에 아무것도 선택되지않았을때
//       if (selectedEngineerId === null) {
//         console.log('아무것도 선택되지않았습니다.');
//         //상태 null 초기화
//         setSelectedId(null);
//         //input전부 null
//         setInputState(Array(6).fill(''));
//       } else {
//         // 로컬에 Id가 있다면
//         const parseId = parseInt(selectedEngineerId);

//         //존재하고 기존에 상태관리와 로컬의 Id다 다르다면
//         if (!isNaN(parseId) && parseId !== selectedId) {
//           // 상태 최신화
//           setSelectedId(parseId);
//         }
//       }
//     };

//     checkLocalStorage();

//     const intervalid = setInterval(checkLocalStorage, 50);
//     return () => clearInterval(intervalid);
//   }, [selectedId]);

//   //선택된 기사의 이름과 일치하는 정보가져오기
//   useEffect(() => {
//     const selectedEngineer = engineers.find(
//       (engineerData) => engineerData.engineerId === selectedId
//     );

//     if (selectedEngineer) {
//       console.log('선택된 기사의 정보:', selectedEngineer);
//       setInputState([
//         selectedEngineer.phoneNumber || '',
//         selectedEngineer.address || '',
//         selectedEngineer.AvailableItems || '',
//         selectedEngineer.Issue || '',
//         '',
//         '',
//       ]);
//     }
//   }, [selectedId, engineers]);

//   //인풋 상태관리 함수 매개변수로 index, value값 받음
//   const LeftInputStateChangeHandler = (index: number, value: string) => {
//     setInputState((prev) => {
//       const newState = [...prev];
//       newState[index] = value;
//       return newState;
//     });
//   };

//   //로컬에 input들의 정보를 넣는 함수
//   const handelSetData = () => {
//     localStorage.setItem('inputData', JSON.stringify(inputState));
//   };

//   //input의 값이 바뀔때 마다 함수호출
//   useEffect(() => {
//     handelSetData();
//   }, [inputState]);

//   return (
//     <Box id="leftInfo" sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
//       {leftinfo.map((item, index) => (
//         <Box
//           key={index}
//           sx={{
//             ...LeftInfoComponentStyleOne,
//           }}
//         >
//           <Box
//             sx={{
//               ...LeftInfoComponentStyleTWo,
//             }}
//           >
//             <Box
//               sx={{
//                 ...LeftInfoComponentStyleThree,
//               }}
//             >
//               {item}
//             </Box>
//             <CInput
//               containerWidth="300px"
//               isReadOnly
//               key={index}
//               value={inputState[index] || ''}
//               handleInput={(e) => {
//                 LeftInputStateChangeHandler(index, e.target.value);
//               }}
//             />
//           </Box>
//         </Box>
//       ))}
//     </Box>
//   );
// };

export {};
