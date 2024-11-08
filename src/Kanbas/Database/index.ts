import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json"
import enrollmentsData from "./enrollments.json";
import users from "./users.json"

let enrollments = [...enrollmentsData];


export const getEnrollmentsByUserId = (userId: string) => {
    return enrollments.filter((enrollment) => enrollment.user === userId);
  };
  
  // 注册用户到课程
  export const enrollUserInCourse = (userId: string, courseId: string) => {
    const alreadyEnrolled = enrollments.some(
      (enrollment) => enrollment.user === userId && enrollment.course === courseId
    );
    if (!alreadyEnrolled) {
      // 新增 enrollment 记录
      const newEnrollment = {
        _id: (enrollments.length + 1).toString(),
        user: userId,
        course: courseId,
      };
      enrollments.push(newEnrollment);
    }
  };
  
  // 取消用户的课程注册
  export const unenrollUserFromCourse = (userId: string, courseId: string) => {
    enrollments = enrollments.filter(
      (enrollment) =>
        !(enrollment.user === userId && enrollment.course === courseId)
    );
  };




export {courses,modules,assignments,enrollments,users};