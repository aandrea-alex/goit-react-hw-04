import CustomButton from '../CustomButton/CustomButton';
import { MOREBTN_CAPTION } from '../../notifications/constants';

const LoadMoreBtn = ({ isVisible, onClick }) => {
  return (
    <>
      {isVisible && (
        <CustomButton onClick={onClick}>{MOREBTN_CAPTION}</CustomButton>
      )}
    </>
  );
};

export default LoadMoreBtn;
