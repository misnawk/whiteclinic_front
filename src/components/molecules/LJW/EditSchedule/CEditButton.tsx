import CButton from '@/components/atom/CButton';

type CEditButtonProps = {
  handleClick: () => void;
};

const CEditButton = ({ handleClick }: CEditButtonProps) => {
  return <CButton content="등록" handleClick={handleClick} type="submit" />;
};

export default CEditButton;
