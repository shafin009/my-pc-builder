import { configureStore } from "@reduxjs/toolkit";
import pcBuilderReducer from "./slices/pcBuilderSlice";

const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderReducer,
  },
});

export default store;
