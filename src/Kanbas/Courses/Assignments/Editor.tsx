import { useParams,useNavigate  } from "react-router-dom";
import { assignments } from "../../Database";
import { useState } from "react";

export default function AssignmentEditor() {
  const { aid,cid } = useParams();
  const assignment = assignments.find((a) => a._id === aid);
  const navigate = useNavigate();
  console.log(useParams());

  if (!assignment) {
    return <div>Assignment not exist</div>;
  }

  return (
    <div id="wd-assignments-editor" className="container">
      <h2>Assignment Editor</h2>

      {/* Assignment Name */}
      <div className="row mb-3">
        <div className="col-4 text-end">
          <label htmlFor="wd-name">Assignment Name</label>
        </div>
        <div className="col-8">
          <input
            id="wd-name"
            className="form-control"
            type="text"
            value={assignment.title}
          />
        </div>
      </div>

      {/* Assignment Description */}
      <div className="row mb-3">
        <div className="col-4 text-end">
          <label htmlFor="wd-description">Description</label>
        </div>
        <div className="col-8">
          <textarea
            id="wd-description"
            className="form-control"
            style={{ height: "300px" }}
            value={assignment.description}
          />
        </div>
      </div>

      {/* Points */}
      <div className="row mb-3">
        <div className="col-4 text-end">
          <label htmlFor="wd-points">Points</label>
        </div>
        <div className="col-8">
          <input
            id="wd-points"
            className="form-control"
            type="number"
            value={assignment.points}
          />
        </div>
      </div>

      {/* Assignment Group */}
      <div className="row mb-3">
        <div className="col-4 text-end">
          <label htmlFor="wd-group">Assignment Group</label>
        </div>
        <div className="col-8">
          <select
            id="wd-group"
            className="form-control"
            value={assignment.assignmentGroup}
          >
            <option value="Assignments">Assignments</option>
            <option value="Quizzes">Quizzes</option>
            <option value="Exams">Exams</option>
            <option value="Projects">Projects</option>
          </select>
        </div>
      </div>

      {/* Display Grade As */}
      <div className="row mb-3">
        <div className="col-4 text-end">
          <label htmlFor="wd-display-grade-as">Display Grade As</label>
        </div>
        <div className="col-8">
          <select
            id="wd-display-grade-as"
            className="form-control"
            value={assignment.displayGradeAs}
          >
            <option value="percentage">Percentage</option>
            <option value="points">Points</option>
            <option value="letter">Letter Grade</option>
          </select>
        </div>
      </div>

      {/* Submission Type */}
      <div className="row mb-3">
        <div className="col-4 text-end">
          <label htmlFor="wd-submission-type">Submission Type</label>
        </div>
        <div className="col-8">
          <select
            id="wd-submission-type"
            className="form-control"
            value={assignment.submissionType}
          >
            <option value="online">Online</option>
            <option value="inperson">In person</option>
          </select>

          {/* Online Entry Options */}
          {assignment.submissionType === "online" && (
            <div className="row mb-3 mt-2">
              <div className="row">
                <label>Online Entry Options</label>
              </div>
              <div className="col-8">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-text-entry"
                    checked={
                      assignment.onlineEntryOptions?.includes("text-entry") ||
                      false
                    }
                  />
                  <label className="form-check-label" htmlFor="wd-text-entry">
                    Text Entry
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-website-url"
                    checked={
                      assignment.onlineEntryOptions?.includes("website-url") ||
                      false
                    }
                  />
                  <label className="form-check-label" htmlFor="wd-website-url">
                    Website URL
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-media-recording"
                    checked={
                      assignment.onlineEntryOptions?.includes(
                        "media-recording"
                      ) || false
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="wd-media-recording"
                  >
                    Media Recording
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-file-upload"
                    checked={
                      assignment.onlineEntryOptions?.includes("file-upload") ||
                      false
                    }
                  />
                  <label className="form-check-label" htmlFor="wd-file-upload">
                    File Upload
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Assign */}
      <div className="row mb-3">
        <div className="col-4 text-end">
          <p>Assign</p>
        </div>
        <div className="col-8 border">
          <div className="row">
            <div className="col-4 m-2">
              <label htmlFor="wd-assign-to">Assign to</label>
            </div>
            <div className="col-8">
              <input
                id="wd-assign-to"
                className="form-control"
                type="text"
                placeholder="Everyone"
              />
            </div>
            <div className="col-4 m-2">
              <label htmlFor="wd-due-date">Due Date</label>
            </div>
            <div className="col-8">
              <input
                id="wd-due-date"
                className="form-control"
                type="date"
                value={
                  typeof assignment.dueDate === "object"
                    ? assignment.dueDate.date
                    : assignment.dueDate
                }
              />
            </div>
          </div>
          {/* avaliable from    */}
          <div className="row">
            <div className="col-3 m-1">
              <label htmlFor="wd-available-from">Available From</label>
            </div>
            <div className="col-3 m-1">
              <label htmlFor="wd-available-until">Until</label>
            </div>
          </div>
          {/* Available From Until row higher */}
          <div className="row mb-3">
            <div className="col-3">
              <input
                id="wd-available-from-date"
                className="form-control"
                type="date"
                value={
                  typeof assignment.availableDate === "object" &&
                  assignment.availableDate.date
                    ? assignment.availableDate.date
                    : ""
                }
              />
            </div>
            <div className="col-3">
              <input
                id="wd-available-until-date"
                className="form-control"
                type="date"
                value={
                  typeof assignment.availableUntil === "object" &&
                  assignment.availableUntil.date
                    ? assignment.availableUntil.date
                    : ""
                }
              />
            </div>
            {/* Available From Until row lower */}
          </div>
          <div className="row mb-3">
            <div className="col-3">
              <input
                id="wd-available-from-time"
                className="form-control"
                type="time"
                value={
                  typeof assignment.availableDate === "object" &&
                  assignment.availableDate.time
                    ? new Date(
                        `1970-01-01T${assignment.availableDate.time}`
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      })
                    : ""
                }
              />
            </div>
            <div className="col-3">
              <input
                id="wd-available-until-time"
                className="form-control"
                type="time"
                value={
                  typeof assignment.availableUntil === "object" &&
                  assignment.availableUntil.time
                    ? new Date(
                        `1970-01-01T${assignment.availableUntil.time}`
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      })
                    : ""
                }
              />
            </div>
          </div>{" "}
        </div>{" "}
      </div>

      <hr className="text-secondary" />

      <div className="d-flex justify-content-end">
      <button className="btn btn-light me-2" onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}>
        Cancel
      </button>
      <button className="btn btn-danger" onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}>
        Save
      </button>
    </div>


    </div>
  );
}
