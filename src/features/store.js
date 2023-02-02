import { configureStore } from "@reduxjs/toolkit";
import Counterreducer from "../features/movies/movieSlice";

// const reHydrateStore = () => {
//   if (localStorage.getItem("Movies") !== null) {
//     return JSON.parse(localStorage.getItem("Movies")); // re-hydrate the store
//   }
// };
// const localStorageMiddleware = ({ getState }) => {
//   return (next) => (action) => {
//     const result = next(action);
//     localStorage.setItem("Movies", JSON.stringify(getState()));
//     return result;
//   };
// };
export const store = configureStore({
  reducer: {
    movies: Counterreducer,
  },
  // preloadedState: reHydrateStore(),

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(localStorageMiddleware),
});
