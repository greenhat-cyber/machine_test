import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header"
import { useEffect } from "react";
import { dishCountDecrement, dishCountIncrement, fetchDishList } from "../store/Dish/DishListSlice";
import { DishCategoryWrap } from "../components/DishCategoryWrap";
import CustomTab from "../components/ui/CustomTab";

const Home = () => {

  const { DishListData, restaurant_name, DishListFetching } = useSelector((state) => state.DishListSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDishList())
  }, [dispatch])

  const tabsData = DishListData?.map((items) => ({
    label: items?.menu_category,
    content: items?.category_dishes?.map((subItems, idx) =>
      <DishCategoryWrap
        data={{...subItems, dishCountDecrement,dishCountIncrement} } key={idx}
      />
    ),
  }));

  return (
    <div className="w-full">
      <Header restaurantName={restaurant_name} />
      <CustomTab tabs={tabsData} isLoading={DishListFetching} isData={DishListData?.length} />
    </div>
  )
}

export default Home