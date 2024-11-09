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

export const enrollCourse = (userId: string, courseId: string) => {
  db.enrollUserInCourse(userId, courseId); 
  return {
    type: ENROLL_COURSE,
    payload: { userId, courseId },
  };
};

export const unenrollCourse = (userId: string, courseId: string) => {
  db.unenrollUserFromCourse(userId, courseId);
  return {
    type: UNENROLL_COURSE,
    payload: { userId, courseId },
  };
};
