import { SalesInfoModel } from '@/constants/definition';
import { StyledCompTableCell, StyledTextTableCell } from '@/styles/customize';
import { amountTotalPrice, calculateComplexPrice } from '@/util/framDataHandlerUtil';
import { tableComponentMaker } from '@/util/createDataArrUtil';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';

const SalesInfoFrame = () => {
  const [salesData, setSalesData] = useState<SalesInfoModel>({
    item: '',
    writtenItem: '',
    itemQuantity: 0,
    isComposite: false,
    isRegular: false,
    isDiscounted: false,
    isModifiable: false,
    discountRatio: '',
    totalPrice: 0,
    comments: '',
  });

  // 제품명 수기입력 readOnly 프롭 토글용 상태변수
  const isItemSelected = !!salesData.item && salesData.item !== '선택';

  useEffect(() => {
    console.log({ ...salesData });
    const totalPrice = calculateComplexPrice(salesData);

    if (totalPrice !== salesData.totalPrice) {
      amountTotalPrice(totalPrice, setSalesData);
    }
  }, [{ ...salesData }]);

  const salesInfoTableRows = tableComponentMaker(salesData, setSalesData, isItemSelected);

  return (
    <TableContainer sx={{ overflow: 'hidden' }}>
      <Table>
        <TableBody>
          {salesInfoTableRows.map((row) => (
            <TableRow key={row?.tableRow}>
              <TableCell sx={{ ...StyledTextTableCell }}>{row?.tableRow}</TableCell>
              <TableCell sx={{ ...StyledCompTableCell }}>
                {row?.components} {row?.subComponents}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SalesInfoFrame;
