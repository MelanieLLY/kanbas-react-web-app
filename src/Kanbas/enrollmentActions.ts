import * as db from "./Database";

export const LOAD_ENROLLMENTS = "LOAD_ENROLLMENTS";
export const ENROLL_COURSE = "ENROLL_COURSE";
export const UNENROLL_COURSE = "UNENROLL_COURSE";

export const loadEnrollments = (userId: string) => {
  const enrollments = db.getEnrollmentsByUserId(userId);  
  return {
    type: LOAD_ENROLLMENTS,
    payload: enrollments,
  };
};

export const enrollCourse =
  (userId: string, courseId: string) => async (dispatch: any) => {
    await db.enrollUserInCourse(userId, courseId);
    dispatch({
      type: ENROLL_COURSE,
      payload: { userId, courseId },
    });
  };

export const unenrollCourse =
  (userId: string, courseId: string) => async (dispatch: any) => {
    await db.unenrollUserFromCourse(userId, courseId);
    dispatch({
      type: UNENROLL_COURSE,
      payload: { userId, courseId },
    });
  };
