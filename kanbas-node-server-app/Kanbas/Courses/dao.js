import Database from "../Database/index.js";

export function findAllCourses() {
  return Database.courses;
}
export function findCoursesForEnrolledUser(userId) {
  const { courses, enrollments, users } = Database;

  // 查找用户角色
  const user = users.find((u) => u._id === userId);
  if (!user) {
    // 如果用户不存在，返回空数组
    return [];
  }

  if (user.role === "FACULTY") {
    // 教师用户：返回所有课程
    return courses;
  }

  if (user.role === "STUDENT") {
    // 学生用户：返回已注册的课程
    return courses.filter((course) =>
      enrollments.some(
        (enrollment) =>
          enrollment.user === userId && enrollment.course === course._id
      )
    );
  }

  // 未知角色：返回空数组
  return [];
}

export function createCourse(course) {
  const newCourse = { ...course, _id: Date.now().toString() }; // 生成唯一 _id
  Database.courses = [...Database.courses, newCourse]; // 将课程追加到数据库
  return newCourse; // 返回新课程对象
}

export function deleteCourse(courseId) {
  const { courses, enrollments } = Database;
  // 删除指定课程
  Database.courses = courses.filter((course) => course._id !== courseId);
  // 删除该课程的所有注册信息
  Database.enrollments = enrollments.filter(
    (enrollment) => enrollment.course !== courseId
  );
}

export function updateCourse(courseId, courseUpdates) {
  const { courses } = Database;
  // 查找指定 ID 的课程
  const course = courses.find((course) => course._id === courseId);
  // 合并更新内容
  Object.assign(course, courseUpdates);
  return course; // 返回更新后的课程
}

