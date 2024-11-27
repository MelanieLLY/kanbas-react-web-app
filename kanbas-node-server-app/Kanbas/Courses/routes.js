import * as courseDao from "../Courses/dao.js";

export default function UserRoutes(app) {
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

  app.get("/api/users/:userId/courses", findCoursesForEnrolledUser);
}
