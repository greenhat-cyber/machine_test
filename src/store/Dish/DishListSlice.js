import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api";

export const fetchDishList = createAsyncThunk(
    "Dish/list",
    async (payload, { rejectWithValue }) => {
      try {
        const response = await api.actionhandler({
          url: api.dishListURL,
          method: "GET",
          data: payload,
        });
  
        if (response.status >= 200 && response.status < 300) {
          return response.data;
        } else {
          return rejectWithValue({ message: response.data.message });
        }
      } catch (error) {
        const message =
          error.response?.data?.message || error.message || error.toString();
        return rejectWithValue({ message });
      }
    }
  );
  

const initialState = {
  DishListError: false,
  DishListFetching: false,
  DishListSuccess: false,
  DishListData:[],
  DishListErrorMessage: "",
  DishListRestaurantName: "",
  dishCounts: {},
};

const DishListSlice = createSlice({
  initialState,
  name: "Dish/list",
  reducers: {
    clearDishListState: (state) => {
      state.DishListError = false;
      state.DishListFetching = false;
      state.DishListSuccess = false;
      state.DishListErrorMessage = "";
    },
    dishCountIncrement: (state, action) => {
      const { dishId } = action.payload;
      state.dishCounts[dishId] = (state.dishCounts[dishId] || 0) + 1;
    },
    dishCountDecrement: (state, action) => {
      const { dishId } = action.payload;
      if (state.dishCounts[dishId] > 0) {
        state.dishCounts[dishId] -= 1;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDishList.pending, (state) => {
      state.DishListFetching = true;
      state.DishListError = false;
      state.DishListSuccess = false;
      state.DishListErrorMessage = "";
    });
    builder.addCase(fetchDishList.fulfilled, (state, action) => {
      state.DishListFetching = false;
      state.DishListError = false;
      state.DishListData = action.payload?.data[0]?.table_menu_list;
      state.restaurant_name = action.payload?.data[0]?.restaurant_name;
      state.DishListSuccess = true;
      state.DishListErrorMessage = "";
    });
    builder.addCase(fetchDishList.rejected, (state, action) => {
      state.DishListFetching = false;
      state.DishListError = true;
      state.DishListSuccess = false;
      state.DishListErrorMessage = action?.payload?.message || "Fetch DishList list failed";
    });
  },
});

export const { clearDishListState, dishCountIncrement , dishCountDecrement } = DishListSlice.actions;

export const selectTotalDishCount = (state) => {
  return Object.values(state.DishListSlice.dishCounts).reduce((total, count) => total + count, 0);
};
export default DishListSlice.reducer;
