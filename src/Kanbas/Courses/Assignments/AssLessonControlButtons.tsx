// src/Kanbas/Courses/Assignments/AssLessonControlButtons.tsx
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import { Link, useParams } from "react-router-dom";

interface AssLessonControlButtonsProps {
  assignmentId: any;
}

export default function AssLessonControlButtons({
  assignmentId,
}: AssLessonControlButtonsProps) {
  const dispatch = useDispatch();
  const { cid } = useParams();

  const handleDelete = () => {
    dispatch(deleteAssignment(assignmentId));
  };

  return (
    <div className="float-end">
      {/* Delete icon with delete functionality */}
      <button className="btn btn-danger m-1" onClick={handleDelete}>
        <FaTrash />
      </button>{" "}
      {/* Edit icon with Link to edit page */}
      <Link
        to={`/Kanbas/Courses/${cid}/Assignments/${assignmentId}`}
        className="btn btn-link text-decoration-none"
      >
        <FaPencil className="m-1" />
      </Link>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
