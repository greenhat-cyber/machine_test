import { FaShoppingCart } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { selectTotalDishCount } from "../store/Dish/DishListSlice";
import { FaArrowLeft } from "react-icons/fa6";


const Header = ({ restaurantName = "" }) => {
    const totalCount = useSelector(selectTotalDishCount);
    return (
        <div className="w-full flex items-center justify-between h-[4rem] px-8 ">
            <FaArrowLeft className="hidden max-xl:block"/>
            <p className="font-bold text-[20px]"> {restaurantName || "UNI Resto Cafe"}</p>
            <div className="flex items-center justify-center gap-4 w-fit">
                <p className="font-medium">My Orders</p>
                <div className="relative p-2">
                    <div className="bg-red-500 text-white font-bold text-[10px] w-[18px] h-[18px] rounded-full absolute top-[-0] right-0 flex items-center justify-center">
                        {totalCount}</div>
                    <FaShoppingCart size={20} />
                </div>
            </div>
        </div>
    )
}
Header.propTypes = {
    restaurantName: PropTypes.string.isRequired,
};

export default Header;