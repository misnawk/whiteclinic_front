import { CheckboxProps } from '@/constants/definition';
import { Checkbox, FormControlLabel } from '@mui/material';
import {
  allType,
  engineerName,
} from '../(current_atom)atom/checkbox/()minsuk_checkbox/KMS_CCheckboxData';

/**
 * @param label 체크박스 라벨 리스트
 * @param handleChange 체크박스 상태변화 추적함수 전달
 * @param isChecked 체크박스 렌더링 시 체크여부 기본값 boolean으로 전달
 * @returns FormContrlLabel 태그와 함께 자식태그로 Checkbox MUI 컴포넌트 반환
 * @disabled 체크박스를 배열로 여러개 사용할때 하나라도 체크박스가 true 라면 나머지 체크박스들은 전부 disabled가 된다.
 */
const CCheckbox = <T extends allType | engineerName>({
  label,
  handleChange,
  isChecked = true,
  width,
  isAnyChecked,
}: CheckboxProps<T>) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={isChecked} onChange={handleChange} />}
      label={label}
      style={{ width: width }}
      disabled={isAnyChecked}
    />
  );
};

export default CCheckbox;
