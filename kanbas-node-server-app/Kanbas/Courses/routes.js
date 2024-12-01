import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";

export default function CourseRoutes(app) {
  const findCoursesForEnrolledUser = (req, res) => {
    let { userId } = req.params;

    if (userId === "current") {
      const currentUser = req.session["currentUser"];
      if (!currentUser) {
        console.warn("No current user in session.");
        res.sendStatus(401);
        return;
      }
      userId = currentUser._id;
    }

    const courses = courseDao.findCoursesForEnrolledUser(userId);
    console.log(`Found courses for user ${userId}:`, courses);
    res.json(courses);
  };
  app.delete("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    console.log(`Deleting course with ID: ${courseId}`);
    dao.deleteCourse(courseId);
    res.sendStatus(204);
  });
  app.put("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params; 
    const courseUpdates = req.body;
    console.log(`Updating course ${courseId} with data:`, courseUpdates);
    dao.updateCourse(courseId, courseUpdates); 
    res.sendStatus(204); 
  });
  app.post("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params; // 获取课程 ID
    const module = {
      ...req.body,
      course: courseId, // 将模块与课程关联
    };
    console.log(`Creating module for course ${courseId}:`, module);
    const newModule = modulesDao.createModule(module); // 创建模块
    res.send(newModule); // 返回新模块
  });
  app.get("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params; // 从路径获取课程 ID
    const modules = modulesDao.findModulesForCourse(courseId); // 查询模块数据
    console.log(`Found modules for course ${courseId}:`, modules);
    res.json(modules); // 返回模块数据
  });
  app.get("/api/users/:userId/courses", findCoursesForEnrolledUser);
  app.get("/api/courses", (req, res) => {
    const courses = dao.findAllCourses();
    res.json(courses);
  });
  
}
