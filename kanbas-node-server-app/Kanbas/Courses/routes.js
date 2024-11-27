import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const findCoursesForEnrolledUser = (req, res) => {
    let { userId } = req.params;

    if (userId === "current") {
      const currentUser = req.session["currentUser"];
      if (!currentUser) {
        res.sendStatus(401);
        return;
      }
      userId = currentUser._id;
    }

    const courses = courseDao.findCoursesForEnrolledUser(userId);
    res.json(courses);
  };
  app.delete("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    dao.deleteCourse(courseId);
    res.sendStatus(204);
  });
  app.get("/api/users/:userId/courses", findCoursesForEnrolledUser);
  app.put("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params; 
    const courseUpdates = req.body;
    dao.updateCourse(courseId, courseUpdates); 
    res.sendStatus(204); 
  });

}
