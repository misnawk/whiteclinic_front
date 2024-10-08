import { create } from 'zustand';
import { Engineer } from '@/types/Engineer';
import { API_ENDPOINTS } from '@/constants/apiEndpoints';

type EngineerData = {
  engineers: Engineer[]; //엔지니어의 정보를 담아주는 객체생성
  setEngineers: (engineers: Engineer[]) => void; //가져온 데이터를 set해주는 함수
  fetchEngineer: () => Promise<void>; //데이터를 가져오는 함수
  engineerNameId: { id: number; name: string }[];
  setEngineerName: (engineerName: { id: number; name: string }[]) => void;
};

export const useEngineerStore = create<EngineerData>((set) => ({
  engineers: [],
  setEngineers: (engineers) => set({ engineers }),
  engineerNameId: [],
  setEngineerName: (engineerNameId) => set({ engineerNameId }),
  fetchEngineer: async () => {
    try {
      const response = await fetch(API_ENDPOINTS.FETCH_Engineer);
      if (!response.ok) {
        throw new Error('에러발생');
      }

      //정보 담아준다.
      const engineers: Engineer[] = await response.json();

      //정보 설정해준다.
      set({ engineers });

      //이름만 뽑아준다.
      const engineerNameId = engineers.map((engineers) => ({
        id: engineers.engineerId,
        name: engineers.name,
      }));

      //이름을 설정해준다.
      set({ engineerNameId });
    } catch (error) {
      console.error('정보를 성공적으로 가져오지못함', error);
    }
  },
}));
