// enrollmentReducer.ts
import {
  LOAD_ENROLLMENTS,
  ENROLL_COURSE,
  UNENROLL_COURSE,
} from "./enrollmentActions";

const initialState = {
  enrollments: [],
};

const enrollmentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_ENROLLMENTS:
      console.log("Reducer - LOAD_ENROLLMENTS payload:", action.payload);
      return {
        ...state,
        enrollments: action.payload,
      };
    case ENROLL_COURSE:
      return {
        ...state,
        enrollments: [
          ...state.enrollments,
          { user: action.payload.userId, course: action.payload.courseId },
        ],
      };
      case UNENROLL_COURSE:
        return {
          ...state,
          enrollments: state.enrollments.filter(
            (enrollment: any) => enrollment._id !== action.payload
          ),
        };
      
    default:
      return state;
  }
};

export default enrollmentReducer;
