import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER
import servicesSlice from "./Reducers/ServicesSlice";
export default configureStore({
  reducer: {
    services: servicesSlice,
  },
});
