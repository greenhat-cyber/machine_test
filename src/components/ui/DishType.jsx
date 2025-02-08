
import PropTypes from 'prop-types';

const DishType = ({dishTypeNo}) => {
  return (
    <div className={`w-[18px] h-[18px] border flex items-center justify-center ${dishTypeNo === 2 ? "border-red-500" :" border-green-500"}`}>
        <div className={`w-[10px] h-[10px] rounded-full ${dishTypeNo === 2 ? "bg-red-500" :" bg-green-500"}`}></div>
    </div>
  )
}
DishType.propTypes = {
  dishTypeNo: PropTypes.number.isRequired,
};

export default DishType;