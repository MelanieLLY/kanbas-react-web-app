import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from 'react-icons/bs';
import GreenCheckmark from "./GreenCheckmark";
export default function ModuleControlButtons(){
    return(
    <div className="float-end">
    <GreenCheckmark />
    <BsPlus className="me-2 fs-2" />
    <IoEllipsisVertical className="fs-4" />
  </div>)
}