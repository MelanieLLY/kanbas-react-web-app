import Database from "../Database/index.js";

// 注册用户到课程
export function enrollUserInCourse(userId, courseId) {
  const newEnrollment = {
    _id: Date.now().toString(), // 生成唯一 ID
    user: userId,
    course: courseId,
  };
  Database.enrollments.push(newEnrollment);
  console.log(
    `User ${userId} enrolled in course ${courseId}. Enrollment:`,
    newEnrollment
  );
  return newEnrollment;
}

// 取消用户的课程注册
export function unenrollUserFromCourse(enrollmentId) {
  const beforeCount = Database.enrollments.length;
  Database.enrollments = Database.enrollments.filter(
    (enrollment) => enrollment._id !== enrollmentId
  );
  const afterCount = Database.enrollments.length;
  console.log(
    `Unenrolled enrollment ID ${enrollmentId}. Count before: ${beforeCount}, after: ${afterCount}.`
  );
}

// 获取用户注册的课程
export function findEnrollmentsByUserId(userId) {
  const userEnrollments = Database.enrollments.filter(
    (enrollment) => enrollment.user === userId
  );
  console.log(`Enrollments for user ${userId}:`, userEnrollments);
  return userEnrollments;
}
