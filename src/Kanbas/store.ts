import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer"
import assignmentsReducer from "./Courses/Assignments/reducer";  
import enrollmentReducer from "./Courses/Enrollments/enrollmentReducer"; 
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignments: assignmentsReducer,
    enrollmentReducer, 
  },
});
store.subscribe(() => {
  const state = store.getState();
  console.log("Debug - Redux Store Updated:");
  console.log("  Modules Reducer:", state.modulesReducer);
  console.log("  Account Reducer:", state.accountReducer);
  console.log("  Assignments Reducer:", state.assignments);
  console.log("  Enrollment Reducer:", state.enrollmentReducer);
});

export default store;