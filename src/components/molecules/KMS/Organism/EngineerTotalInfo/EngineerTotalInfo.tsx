import { Box } from '@mui/material';
import { CheckboxList } from '../../Melecules/engineerInfo/CheckboxList';
import { EngineerInfo } from './engineerInfo/EngineerInfo';
import { EngineerTotalInfoStyle } from '@/styles/customize';

export const EngineerTotalInfo = () => {
  return (
    <Box
      sx={{
        ...EngineerTotalInfoStyle,
      }}
    >
      <Box sx={{ mb: 3 }}>
        <CheckboxList />
      </Box>

      <EngineerInfo />
    </Box>
  );
};
