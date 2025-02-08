import PropTypes from "prop-types";
import CounterButton from "./ui/CounterButton";
import DishType from "./ui/DishType";

const ProductCard = ({ dishes, }) => {

    const isDishAvailable = dishes?.dish_Availability

    return (
        <div className="w-full p-3 px-4 h-auto relative">
            <div className={`w-full border-b border-gray-200 pb-3 h-auto grid grid-cols-12 gap-2 ${!isDishAvailable && "saturate-0"}`}>
                <div className="col-span-10">
                    <div className="flex gap-2 items-center justify-start">
                        <DishType dishTypeNo={dishes?.dish_Type} />
                        <p className="text-lg font-bold line-clamp-3">{dishes?.dish_name}</p>
                    </div>
                    <div className="w-auto pl-7">
                        <div className="flex items-center w-full max-lg:pr-4">
                            <div className="w-[50%] flex items-center justify-start">
                              <p className="text-sm line-clamp-3 font-bold">{dishes?.dish_currency} {dishes?.dish_price}</p>
                            </div>
                            <div className="w-[50%] flex items-center justify-end">
                             <p className="text-sm font-bold line-clamp-3">{dishes?.dish_calories} calories</p>
                            </div>
                        </div>
                        <div className="flex gap-1 flex-col">
                            <p className="text-sm text-gray-600 line-clamp-3">{dishes?.dish_description}</p>
                            <CounterButton isDishAvailable={isDishAvailable} dishId={dishes?.dish_id} handleDecrement={dishes?.dishCountDecrement} handleIncrement={dishes?.dishCountIncrement} />
                            {dishes?.addonCat?.length > 0 && <p className="text-red-500">Customization Available</p>}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end max-lg:items-start col-span-2">
                    <div className="w-[100px] h-[100px] max-lg:w-[80px] max-lg:h-[80px] flex-shrink-0 shadow rounded-2xl flex items-center">
                        <img
                            className="w-full h-full object-cover rounded-2xl"
                            src={dishes?.dish_image}
                            alt={dishes?.dish_name}
                        />
                    </div>
                </div>
            </div>
            {
                !dishes?.dish_Availability && <p className="text-red-500 absolute top-[15%] right-[50%] max-lg:top-[20%] max-lg:right-[40%] font-bold">Dish not availability</p>
            }
        </div>

    );
};

ProductCard.propTypes = {
    dishes: PropTypes.shape({
        dish_Type: PropTypes.number.isRequired,
        dish_name: PropTypes.string.isRequired,
        dish_currency: PropTypes.string.isRequired,
        dish_price: PropTypes.number.isRequired,
        dish_calories: PropTypes.number.isRequired,
        dish_description: PropTypes.string.isRequired,
        dish_image: PropTypes.string.isRequired,
        dish_id: PropTypes.string.isRequired,
        addonCat: PropTypes.array,
        dishCountDecrement: PropTypes.func.isRequired,
        dishCountIncrement: PropTypes.func.isRequired,
        dish_Availability: PropTypes.bool.isRequired,
    }).isRequired,
};

export default ProductCard;
