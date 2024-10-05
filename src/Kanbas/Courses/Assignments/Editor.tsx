export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container">
      <h2>Assignment Editor</h2>

      <div className="row mb-3">
        <div className="row-1">
          <label htmlFor="wd-name">Assignment Name</label>
        </div>
        <div className="row-2">
          <input
            id="wd-name"
            className="form-control"
            type="text"
            value="A1 - ENV + HTML"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="row-1">
          <label htmlFor="wd-description">Description</label>
        </div>
        <div className="row-2">
          <textarea
            id="wd-description"
            className="form-control"
            style={{ height: "300px" }}
          >
            The assignment is available online. Submit a link to the landing
            page. Use the following starter code to get going with the
            implementation of the Assignment Editor screen.
          </textarea>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-4 text-end">
          <label htmlFor="wd-points">Points</label>
        </div>
        <div className="col-8">
          <input
            id="wd-points"
            className="form-control"
            type="number"
            value={100}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-4 text-end">
          <label htmlFor="wd-group">Assignment Group</label>
        </div>
        <div className="col-8">
          <select id="wd-group" className="form-control">
            <option value="online">Assignments</option>
            <option value="quizzes">Quizzes</option>
            <option value="exams">Exams</option>
            <option value="projects">Projects</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-4 text-end">
          <label htmlFor="wd-display-grade-as">Display Grade As</label>
        </div>
        <div className="col-8">
          <select id="wd-display-grade-as" className="form-control">
            <option value="percentage">Percentage</option>
            <option value="points">Points</option>
            <option value="letter">Letter Grade</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-4 text-end">
          <label htmlFor="wd-submission-type">Submission Type</label>
        </div>
        <div className="col-8">
          <select id="wd-submission-type" className="form-control">
            <option value="online">Online</option>
            <option value="inperson">In person</option>
          </select>
          <div className="row mb-3">
            <div className="row-1 m-3">
              <label>Online Entry Options</label>
            </div>
            <div className="col-8">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-text-entry"
                  value="text-entry"
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
                  value="website-url"
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
                  value="media-recording"
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
                  id="wd-student-annotation"
                  value="student-annotation"
                />
                <label
                  className="form-check-label"
                  htmlFor="wd-student-annotation"
                >
                  Student Annotation
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="wd-file-upload"
                  value="file-upload"
                />
                <label className="form-check-label" htmlFor="wd-file-upload">
                  File Upload
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mb-3">
          <div className="col-4 text-end">
            <p>Assign</p>
          </div>

          <div className="col-4">
            <div className="row mb-3">
              <div className="col-4">
                <label htmlFor="wd-assign-to">Assign to</label>
              </div>
              <div className="col-8">
                <input id="wd-assign-to" className="form-control" type="text" />
              </div>
              <div className="col-4">
                <label htmlFor="wd-due-date">Due Date</label>
              </div>
              <div className="col-8">
                <input id="wd-due-date" className="form-control" type="date" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-6">
                <label htmlFor="wd-available-from">Available From</label>
              </div>
              <div className="col-6">
                <label htmlFor="wd-available-until">Until</label>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  id="wd-available-from"
                  className="form-control"
                  type="date"
                />
              </div>
              <div className="col-6">
                <input
                  id="wd-available-until"
                  className="form-control"
                  type="date"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-secondary" />

      <div className="d-flex justify-content-end">
        <button className="btn btn-light me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>

      {/* 
      
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" value={100} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="online">Assignments</option>
                <option value="quizzes">Quizzes</option>
                <option value="exams">Exams</option>
                <option value="projects">Projects</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
                <option value="letter">Letter Grade</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="online">Online</option>
                <option value="inperson">In person</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              {" "}
            </td>

            <td>
              <p>Online Entry Options</p>

              <label>
                <input type="checkbox" id="wd-text-entry" value="text-entry" />
                Text Entry
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  id="wd-website-url"
                  value="website-url"
                />
                Website URL
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  id="wd-media-recording"
                  value="media-recording"
                />
                Media Recording
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  id="wd-student-annotation"
                  value="student-annotation"
                />
                Student Annotation
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  id="wd-file-upload"
                  value="file-upload"
                />
                File Upload
              </label>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
              <span>Assign to</span>
              <br />
              <select id="wd-assign-to">
                <option value="everyone">Everyone</option>
                <option value="instructors">Instructors</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due Date</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
              <input id="wd-available-from" type="date" />
            </td>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input id="wd-available-until" type="date" />
            </td>
          </tr>
        </tbody>
      </table>
 */}
    </div>
  );
}
