import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        description: assignment.description,
        course: assignment.course,
        points: assignment.points || 100,
        dueDate: assignment.dueDate || null,
        availableDate: assignment.availableDate || null,
        assignmentGroup: assignment.assignmentGroup || "Assignments",
        displayGradeAs: assignment.displayGradeAs || "points",
        submissionType: assignment.submissionType || "online",
      };
      // state.assignments = [...state.assignments, newAssignment];
      state.assignments.push(newAssignment); // 通过 push 添加新作业

    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
