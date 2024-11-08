import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaPencil, FaTrash } from "react-icons/fa6";
export default function AssLessonControlButtons() {
  return (
    <div className="float-end">
      <FaTrash className="m-1" />
      <FaPencil className="m-1" />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
