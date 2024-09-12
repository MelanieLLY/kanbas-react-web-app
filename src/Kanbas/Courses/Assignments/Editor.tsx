export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name </label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" style={{ width: "380px", height: "300px" }}>
        The assignment is available online. Submit a link to the landing page.
        Use the following starter code to get going with the implementation of
        the Assignment Editor screen.
      </textarea>
      <br />
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
            </td></tr>


            <tr>
            <td align="right" valign="top"> </td>

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
    </div>
  );
}
