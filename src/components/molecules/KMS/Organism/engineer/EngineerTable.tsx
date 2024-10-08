import CCheckbox from '@/components/atom/CCheckbox';
import CInput from '@/components/atom/CInput';
import { engineerCreateData, EngineerInfoModel, skillArr } from '@/constants/definition';
import { EngineerTableStyle } from '@/styles/customize';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';

type EngineerTableProps = {
  engineerData: EngineerInfoModel;
  onEngineerChange: (key: keyof EngineerInfoModel, value: string) => void;
  onToggle: (index: number, value: string) => void;
};

export const EngineerTable = ({
  engineerData,
  onEngineerChange,
  onToggle,
}: EngineerTableProps) => {
  //체크박스 뿌려주기
  const SkillCheckBoxs = () => {
    return (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 2,
          maxWidth: '600px',
        }}
      >
        {skillArr.map((skill, index) => (
          <CCheckbox
            key={index}
            label={skill}
            isChecked={engineerData.checkBoxState[index]}
            handleChange={() => onToggle(index, skill)}
          />
        ))}
      </Box>
    );
  };

  const rows = [
    engineerCreateData(
      '기사성함',
      CInput({
        labelProp: '기사 성함',
        type: 'text',
        placeholderProp: '이름을 입력하세요',
        handleInput: (e) => {
          onEngineerChange('name', e.target.value);
        },
        value: engineerData.name,
      })
    ),
    engineerCreateData(
      '연락처',
      CInput({
        labelProp: '기사 연락처',
        type: 'text',
        placeholderProp: '`-` 를 제외하고 입력하세요',
        handleInput: (e) => {
          onEngineerChange('number', e.target.value);
        },
        value: engineerData.number,
      })
    ),
    engineerCreateData(
      '거주지역',
      CInput({
        labelProp: '기사 주소지',
        type: 'text',
        placeholderProp: '상세 주소를 입력하세요',
        handleInput: (e) => {
          onEngineerChange('address', e.target.value);
        },
        value: engineerData.address,
      })
    ),
    engineerCreateData(
      '가능품목',
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <SkillCheckBoxs />
        ||
        <Box>
          {CInput({
            labelProp: '제품명 직접입력',
            type: 'text',
            placeholderProp: '제품명 직접입력',
            handleInput: (e) => onEngineerChange('addskill', e.target.value),
          })}
        </Box>
      </Box>
    ),
    engineerCreateData(
      '특이사항',
      CInput({
        labelProp: '특이사항',
        type: 'text',
        placeholderProp: '특이사항이 있을 시 기입하세요.',
        handleInput: (e) => onEngineerChange('issue', e.target.value),
        value: engineerData.issue,
      })
    ),
  ];

  return (
    <div>
      <TableContainer component={Paper} sx={{ borderRadius: '8px', scrollbarWidth: 'thin' }}>
        <Table>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.row}>
                <TableCell
                  sx={{
                    ...EngineerTableStyle,
                  }}
                >
                  {row.row}
                </TableCell>

                <TableCell>
                  <Box>{row.first}</Box>
                  <Box>{row.second}</Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
