// enrollmentReducer.ts
import { LOAD_ENROLLMENTS, ENROLL_COURSE, UNENROLL_COURSE } from "./enrollmentActions";

const initialState = {
  enrollments: [],
};

const enrollmentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_ENROLLMENTS:
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
          (enrollment: any) =>
            !(enrollment.user === action.payload.userId && enrollment.course === action.payload.courseId)
        ),
      };
    default:
      return state;
  }
};

export default enrollmentReducer;
