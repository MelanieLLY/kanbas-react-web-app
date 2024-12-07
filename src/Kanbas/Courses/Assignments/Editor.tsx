import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../Assignments/reducer"; 
import * as assignmentsClient from "./client"; // 引入后端 API

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("Current aid:", aid);  // Debugging statement

  const assignment = useSelector((state: any) =>
    state.assignments.assignments.find((a: any) => a._id === aid)
  );


  const [localAssignment, setLocalAssignment] = useState<any>(
    assignment || {
      title: "",
      description: "",
      course: cid,
      points: 100,
      assignmentGroup: "Assignments",
      displayGradeAs: "points",
      submissionType: "online",
      onlineEntryOptions: [],
      assignTo: "Everyone",
      dueDate: { date: "", time: "" },
      availableDate: { date: "", time: "" },
      availableUntil: { date: "", time: "" },
    }
  );

  useEffect(() => {
    if (aid && assignment) {
      setLocalAssignment({ ...assignment });
    }
  }, [aid, assignment]); 


  const handleSave = async () => {
    const formattedAssignment = {
      ...localAssignment,
      course: typeof localAssignment.course === "string"
        ? localAssignment.course
        : localAssignment.course.$oid, // 提取字符串
    };
    if (!cid) {
      console.error("Error: Course ID is missing.");
      return;
    }
    if (aid) {
      const updatedAssignment = await assignmentsClient.updateAssignment(aid, formattedAssignment);
      dispatch(updateAssignment(updatedAssignment));
    } else {
      const newAssignment = await assignmentsClient.createAssignment(cid, formattedAssignment);
      console.log("New Assignment Created:", newAssignment); // 添加调试日志
      dispatch(addAssignment(newAssignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container">
      <h2>{aid ? "Edit Assignment" : "Add New Assignment"}</h2>

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
            value={localAssignment?.title || ""}
            onChange={(e) =>
              setLocalAssignment({ ...localAssignment, title: e.target.value })
            }
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
            value={localAssignment?.description || ""}
            onChange={(e) =>
              setLocalAssignment({
                ...localAssignment,
                description: e.target.value,
              })
            }
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
            value={localAssignment?.points || 0}
            onChange={(e) =>
              setLocalAssignment({
                ...localAssignment,
                points: Number(e.target.value),
              })
            }
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
            value={localAssignment?.assignmentGroup || ""}
            onChange={(e) =>
              setLocalAssignment({
                ...localAssignment,
                assignmentGroup: e.target.value,
              })
            }
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
            value={localAssignment?.displayGradeAs || ""}
            onChange={(e) =>
              setLocalAssignment({
                ...localAssignment,
                displayGradeAs: e.target.value,
              })
            }
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
            value={localAssignment?.submissionType || ""}
            onChange={(e) =>
              setLocalAssignment({
                ...localAssignment,
                submissionType: e.target.value,
              })
            }
          >
            <option value="online">Online</option>
            <option value="inperson">In person</option>
          </select>

          {/* Online Entry Options */}
          {/* Online Entry Options */}
          {localAssignment?.submissionType === "online" && (
            <div className="row mb-3 mt-2">
              <div className="col-8 offset-4">
                {/* Text Entry */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-text-entry"
                    checked={
                      localAssignment.onlineEntryOptions?.includes(
                        "text-entry"
                      ) || false
                    }
                    onChange={(e) =>
                      setLocalAssignment({
                        ...localAssignment,
                        onlineEntryOptions: e.target.checked
                          ? [
                              ...(localAssignment.onlineEntryOptions || []),
                              "text-entry",
                            ]
                          : (localAssignment.onlineEntryOptions || []).filter(
                              (option: string) => option !== "text-entry"
                            ),
                      })
                    }
                  />
                  <label className="form-check-label" htmlFor="wd-text-entry">
                    Text Entry
                  </label>
                </div>

                {/* Website URL */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-website-url"
                    checked={
                      localAssignment.onlineEntryOptions?.includes(
                        "website-url"
                      ) || false
                    }
                    onChange={(e) =>
                      setLocalAssignment({
                        ...localAssignment,
                        onlineEntryOptions: e.target.checked
                          ? [
                              ...(localAssignment.onlineEntryOptions || []),
                              "website-url",
                            ]
                          : (localAssignment.onlineEntryOptions || []).filter(
                              (option: string) => option !== "website-url"
                            ),
                      })
                    }
                  />
                  <label className="form-check-label" htmlFor="wd-website-url">
                    Website URL
                  </label>
                </div>

                {/* Media Recording */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-media-recording"
                    checked={
                      localAssignment.onlineEntryOptions?.includes(
                        "media-recording"
                      ) || false
                    }
                    onChange={(e) =>
                      setLocalAssignment({
                        ...localAssignment,
                        onlineEntryOptions: e.target.checked
                          ? [
                              ...(localAssignment.onlineEntryOptions || []),
                              "media-recording",
                            ]
                          : (localAssignment.onlineEntryOptions || []).filter(
                              (option: string) => option !== "media-recording"
                            ),
                      })
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="wd-media-recording"
                  >
                    Media Recording
                  </label>
                </div>

                {/* File Upload */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="wd-file-upload"
                    checked={
                      localAssignment.onlineEntryOptions?.includes(
                        "file-upload"
                      ) || false
                    }
                    onChange={(e) =>
                      setLocalAssignment({
                        ...localAssignment,
                        onlineEntryOptions: e.target.checked
                          ? [
                              ...(localAssignment.onlineEntryOptions || []),
                              "file-upload",
                            ]
                          : (localAssignment.onlineEntryOptions || []).filter(
                              (option: string) => option !== "file-upload"
                            ),
                      })
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

      {/* Assign To */}
      <div className="row mb-3">
        <div className="col-4 text-end">
          <label htmlFor="wd-assign-to">Assign to</label>
        </div>
        <div className="col-8">
          <input
            id="wd-assign-to"
            className="form-control"
            type="text"
            value={localAssignment?.assignTo || "Everyone"}
            onChange={(e) =>
              setLocalAssignment({
                ...localAssignment,
                assignTo: e.target.value,
              })
            }
          />
        </div>
      </div>

      {/* Due Date */}
      <div className="row mb-3">
        <div className="col-4 text-end">
          <label htmlFor="wd-due-date">Due Date</label>
        </div>
        <div className="col-8">
          <input
            id="wd-due-date"
            className="form-control"
            type="date"
            value={localAssignment?.dueDate?.date || ""}
            onChange={(e) =>
              setLocalAssignment({
                ...localAssignment,
                dueDate: {
                  ...localAssignment.dueDate,
                  date: e.target.value,
                },
              })
            }
          />
          <input
            id="wd-due-time"
            className="form-control mt-2"
            type="time"
            value={localAssignment?.dueDate?.time || ""}
            onChange={(e) =>
              setLocalAssignment({
                ...localAssignment,
                dueDate: {
                  ...localAssignment.dueDate,
                  time: e.target.value,
                },
              })
            }
          />
        </div>
      </div>

      {/* Available From */}
      <div className="row mb-3">
        <div className="col-4 text-end">
          <label htmlFor="wd-available-from">Available From</label>
        </div>
        <div className="col-8">
          <input
            id="wd-available-from-date"
            className="form-control"
            type="date"
            value={localAssignment?.availableDate?.date || ""}
            onChange={(e) =>
              setLocalAssignment({
                ...localAssignment,
                availableDate: {
                  ...localAssignment.availableDate,
                  date: e.target.value,
                },
              })
            }
          />
          <input
            id="wd-available-from-time"
            className="form-control mt-2"
            type="time"
            value={localAssignment?.availableDate?.time || ""}
            onChange={(e) =>
              setLocalAssignment({
                ...localAssignment,
                availableDate: {
                  ...localAssignment.availableDate,
                  time: e.target.value,
                },
              })
            }
          />
        </div>
      </div>

      {/* Available Until */}
      <div className="row mb-3">
        <div className="col-4 text-end">
          <label htmlFor="wd-available-until">Available Until</label>
        </div>
        <div className="col-8">
          <input
            id="wd-available-until-date"
            className="form-control"
            type="date"
            value={localAssignment?.availableUntil?.date || ""}
            onChange={(e) =>
              setLocalAssignment({
                ...localAssignment,
                availableUntil: {
                  ...localAssignment.availableUntil,
                  date: e.target.value,
                },
              })
            }
          />
          <input
            id="wd-available-until-time"
            className="form-control mt-2"
            type="time"
            value={localAssignment?.availableUntil?.time || ""}
            onChange={(e) =>
              setLocalAssignment({
                ...localAssignment,
                availableUntil: {
                  ...localAssignment.availableUntil,
                  time: e.target.value,
                },
              })
            }
          />
        </div>
      </div>

      <hr className="text-secondary" />

      {/* Save/Cancel Buttons */}
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-light me-2"
          onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}
        >
          Cancel
        </button>
        <button className="btn btn-danger" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
