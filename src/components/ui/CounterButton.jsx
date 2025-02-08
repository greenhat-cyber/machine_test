import { FaMinus, FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';

const CounterButton = ({handleIncrement, handleDecrement, dishId, isDishAvailable}) => {
    const dishCount = useSelector((state) => state.DishListSlice.dishCounts[dishId]);
    const dispatch = useDispatch()
    return (
        <div className="w-fit h-auto px-2 rounded-full bg-green-500 grid grid-flow-col gap-2 text-white">
            <button className="flex items-center justify-center p-2" onClick={()=>dispatch(handleDecrement({dishId}))} disabled={!isDishAvailable} >
                <FaMinus size={10} className="cursor-pointer" />
            </button>
            <p className="font-bold">{dishCount || 0}</p>
            <button className="flex items-center justify-center p-2" onClick={()=>dispatch(handleIncrement({dishId}))} disabled={!isDishAvailable}>
                <FaPlus size={10} className="cursor-pointer" />
            </button>
        </div>
    )
}
CounterButton.propTypes = {
    handleIncrement: PropTypes.func.isRequired,
    handleDecrement: PropTypes.func.isRequired,
    isDishAvailable: PropTypes.bool.isRequired,
    dishId: PropTypes.string.isRequired,
};

export default CounterButton;