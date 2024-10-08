import { Box } from '@mui/material';
import { LeftInfoComponent } from './LeftInfoComponent';
import { RightInfoComponent } from './RightInfoComponent';
import CButton from '@/components/atom/CButton';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const EngineerInfo = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 2.5fr',
          flex: 1,
          padding: '0 !important',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            padding: '20px',
          }}
        >
          <LeftInfoComponent />
        </Box>
        <Box
          sx={{
            backgroundColor: 'white',
            padding: '20px',
          }}
        >
          <RightInfoComponent />
        </Box>
        <Box sx={{ display: 'flex', gap: '50px', paddingTop: '30px' }}>
          
          <Link href="/engineer/e_salaryTotalCheck">
            <CButton content="급여사항확인" fontSize="large" />
          </Link>

          <Link href="/engineer/e_register">
            <CButton content="기사정보수정" fontSize="large" />
          </Link>
        </Box>
      </Box>
    </div>
  );
};
