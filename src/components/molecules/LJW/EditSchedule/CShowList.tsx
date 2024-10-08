import { StyledShowList } from '@/styles/customize';
import { Box, FormLabel } from '@mui/material';
import { Dayjs } from 'dayjs';

type CShowListProps = {
  children: React.ReactNode;
  label?: string;
};
const CShowList = ({ children, label }: CShowListProps) => {
  return (
    <Box>
      <FormLabel>{label}</FormLabel>
      <Box sx={{ ...StyledShowList }}>{children}</Box>
    </Box>
  );
};

export default CShowList;
