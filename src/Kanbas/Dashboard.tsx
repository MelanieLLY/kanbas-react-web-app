import { Link } from "react-router-dom";
import * as db from "./Database";

export default function Dashboard() {
  const courses = db.courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
        {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px"}}>
              <div className="card rounded-3 overflow-hidden h-100 d-flex flex-column">
                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <img src={course.image} width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name} </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description} </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}





            {/* I made its height to be 350px so every card looks the same height regardless how much text inside for course dexcription */}

            {/* below are old ones when lab 2
            <div className="wd-dashboard-course col" style={{ width: "270px" }}>

            <div
              className="card rounded-3 overflow-hidden"
              style={{ height: "350px" }}
            >
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/MA101/Home"
              >
                <img src="/images/Web.webp" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 Basic Web Dev
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    CS Web development class
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div
              className="card rounded-3 overflow-hidden"
              style={{ height: "350px" }}
            >
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/PH302/Home"
              >
                <img src="/images/Physics.webp" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    PH302 Physics II
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Introduction to classical mechanics and basic physics
                    concepts.
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div
              className="card rounded-3 overflow-hidden"
              style={{ height: "350px" }}
            >
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/AR204/Home"
              >
                <img src="/images/ArtHistory.webp" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    AR204 Art History
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Explore the development of art from ancient to modern times.
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div
              className="card rounded-3 overflow-hidden"
              style={{ height: "350px" }}
            >
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/BI112/Home"
              >
                <img src="/images/Biology.webp" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    BI112 Biology I
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Learn about cells, genetics, and ecosystems in this
                    introductory biology course.
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div
              className="card rounded-3 overflow-hidden"
              style={{ height: "350px" }}
            >
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/HI101/Home"
              >
                <img
                  src="/images/WorldHistory.webp"
                  width="100%"
                  height={160}
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    HI101 World History
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    A survey of major historical events from ancient times to
                    the present.
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div
              className="card rounded-3 overflow-hidden"
              style={{ height: "350px" }}
            >
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/CH133/Home"
              >
                <img src="/images/Chemistry.webp" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CH133 Chemistry I
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Basic concepts of chemical reactions and atomic structure.
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div
              className="card rounded-3 overflow-hidden"
              style={{ height: "350px" }}
            >
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/GE117/Home"
              >
                <img src="/images/Geography.webp" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    GE117 Geography
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Study the physical features of the Earth and the human
                    impact on geography.
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div> */}

          {/* below are old ones
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
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

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
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

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
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

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
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
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
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
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
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
          </div> */}
        </div>
      </div>
      <p> Images from DALL-E</p>
    </div>
  );
}
