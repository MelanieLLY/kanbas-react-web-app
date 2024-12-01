import * as client from "./client";

export const LOAD_ENROLLMENTS = "LOAD_ENROLLMENTS";
export const ENROLL_COURSE = "ENROLL_COURSE";
export const UNENROLL_COURSE = "UNENROLL_COURSE";

// 设置加载的注册信息
export const setEnrollments = (enrollments: any[]) => ({
  type: LOAD_ENROLLMENTS,
  payload: enrollments,
});

// 注册课程
export const enrollCourseSync = (userId: string, courseId: string) => ({
  type: ENROLL_COURSE,
  payload: { userId, courseId },
});

// 取消注册课程
export const unenrollCourseSync = (enrollmentId: string) => async (dispatch: any) => {
  try {
    const response = await client.unenrollUserFromCourse(enrollmentId);
    console.log("Unenroll API response:", response); // 确保返回 `204 No Content`
    dispatch({
      type: UNENROLL_COURSE,
      payload: enrollmentId,
    });
  } catch (error) {
    console.error("Failed to unenroll:", error);
  }
};
