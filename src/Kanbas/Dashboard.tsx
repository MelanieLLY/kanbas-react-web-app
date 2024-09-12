import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/Web.webp" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/CS1234/Home"
            >
              CS1234 Basic Web Dev
            </Link>
            <p className="wd-dashboard-course-title">CS Web development class</p>
            <Link to="/Kanbas/Courses/MA101/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/Physics.webp" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/PH302/Home"
            >
              PH302 Physics II
            </Link>
            <p className="wd-dashboard-course-title">
              Introduction to classical mechanics and basic physics concepts.
            </p>
            <Link to="/Kanbas/Courses/PH102/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/ArtHistory.webp" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/AR204/Home"
            >
              AR204 Art History
            </Link>
            <p className="wd-dashboard-course-title">
              Explore the development of art from ancient to modern times.
            </p>
            <Link to="/Kanbas/Courses/AR204/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/Biology.webp" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/BI112/Home"
            >
              BI112 Biology I
            </Link>
            <p className="wd-dashboard-course-title">
              Learn about cells, genetics, and ecosystems in this introductory
              biology course.
            </p>
            <Link to="/Kanbas/Courses/BI112/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/WorldHistory.webp" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/HI101/Home"
            >
              HI101 World History
            </Link>
            <p className="wd-dashboard-course-title">
              A survey of major historical events from ancient times to the
              present.
            </p>
            <Link to="/Kanbas/Courses/HI101/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/Chemistry.webp" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/CH133/Home"
            >
              CH133 Chemistry I
            </Link>
            <p className="wd-dashboard-course-title">
              Basic concepts of chemical reactions and atomic structure.
            </p>
            <Link to="/Kanbas/Courses/CH133/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/Geography.webp" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/GE117/Home"
            >
              GE117 Geography
            </Link>
            <p className="wd-dashboard-course-title">
              Study the physical features of the Earth and the human impact on
              geography.
            </p>
            <Link to="/Kanbas/Courses/GE117/Home"> Go </Link>
          </div>
        </div>
      <p> Images from DALL-E</p>
      </div>
    </div>
  );
}
