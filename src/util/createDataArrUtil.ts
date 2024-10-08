import { CleaningItem, SalesInfoModel, salesInfoValue } from '@/constants/definition';
import { Dispatch, SetStateAction } from 'react';
import { writeInfoTable } from './makeTableFrameUtil';
import CDropDown from '@/components/atom/CDropdown';
import CInput from '@/components/atom/CInput';
import { CNumberInput } from '@/components/atom/CNumberInput';
import CCheckbox from '@/components/atom/CCheckbox';

export const salesInfoChangeHandler = (
  key: keyof SalesInfoModel,
  value: salesInfoValue | null,
  stateFn: Dispatch<SetStateAction<SalesInfoModel>>
) => {
  value && stateFn((prevState) => ({ ...prevState, [key]: value }));
  !!value && console.log('salesInfo parameter has no value');
};

// 체크박스 상태 관리 변수
export const handleCheckboxChange = (
  type: 'isComposite' | 'isRegular' | 'isDiscounted',
  stateFn: Dispatch<SetStateAction<SalesInfoModel>>
) => {
  stateFn((prevState) => {
    const newState = { ...prevState };
    if (type === 'isComposite' || type === 'isRegular') {
      newState.isComposite = type === 'isComposite' ? !prevState.isComposite : false;
      newState.isRegular = type === 'isRegular' ? !prevState.isRegular : false;
    } else {
      newState[type] = !prevState[type];
    }

    return newState;
  });
};

export const tableComponentMaker = (
  stateParam: SalesInfoModel,
  stateActionParam: Dispatch<SetStateAction<SalesInfoModel>>,
  readOnlyToggleState: boolean
) => {
  const tempArr = [
    writeInfoTable(
      '세척품목',
      CDropDown({
        contentList: CleaningItem,
        handleChange: (event) =>
          salesInfoChangeHandler('item', event.target.value, stateActionParam),
      }),
      CInput({
        type: 'text',
        placeholderProp: '분류 불가능한 세척품목',
        labelProp: '제품명 입력',
        handleInput: (event) =>
          salesInfoChangeHandler('writtenItem', event.target.value, stateActionParam),
        isDisabled: readOnlyToggleState,
      })
    ),
    writeInfoTable(
      '세척대수',
      CNumberInput({
        handleChange: (event, value) =>
          salesInfoChangeHandler('itemQuantity', value, stateActionParam),
      })
    ),
    writeInfoTable(
      '세척방식',
      CCheckbox({
        label: '종합세척',
        isChecked: stateParam.isComposite,
        handleChange: () => handleCheckboxChange('isComposite', stateActionParam),
      }),
      CCheckbox({
        label: '일반세척',
        isChecked: stateParam.isRegular,
        handleChange: () => handleCheckboxChange('isRegular', stateActionParam),
      })
    ),
    writeInfoTable(
      '할인여부',
      CCheckbox({
        label: '할인적용',
        isChecked: stateParam.isDiscounted,
        handleChange: () => handleCheckboxChange('isDiscounted', stateActionParam),
      }),
      CInput({
        labelProp: '할인율',
        placeholderProp: '할인율을 입력하세요',
        isDisabled: !stateParam.isDiscounted,
        type: 'text',
        handleInput: (event) =>
          salesInfoChangeHandler('discountRatio', event.target.value, stateActionParam),
      })
    ),
    writeInfoTable(
      '세척금액',
      CInput({
        isModifiable: true,
        type: 'number',
        modifyInput: () =>
          salesInfoChangeHandler('isModifiable', !stateParam.isModifiable, stateActionParam),
        placeholderProp: '할인 금액 출력',
        variableValue: stateParam.totalPrice,
        adornment: '원',
        isDisabled: !stateParam.isModifiable,
      })
    ),
    writeInfoTable(
      '특이사항',
      CInput({
        labelProp: '특이사항',
        placeholderProp: '특이사항이 있을 시 기입하세요.',
        handleInput: (event) =>
          salesInfoChangeHandler('comments', event.target.value, stateActionParam),
      })
    ),
  ];

  return tempArr;
};
