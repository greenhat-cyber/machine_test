import PropTypes from "prop-types";
import ProductCard from "./ProductCard"

export const DishCategoryWrap = ({ data}) => {
    return (
        <div className="w-full h-fit flex items-center justify-center">
              <ProductCard dishes={data} />
        </div>
    )
}

DishCategoryWrap.propTypes = {
    data: PropTypes.array.isRequired,
};