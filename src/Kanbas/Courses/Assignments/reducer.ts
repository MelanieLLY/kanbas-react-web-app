import { createSlice } from "@reduxjs/toolkit";


interface Assignment {
  _id: string;
  title: string;
  description: string;
  course: string;
  points?: number;
  dueDate?: { date: string; time: string } | null;
  availableDate?: { date: string; time: string } | null;
  assignmentGroup?: string;
  displayGradeAs?: string;
  submissionType?: string;
  onlineEntryOptions?: string[];
  assignTo?: string;
}

// 初始状态类型
interface AssignmentsState {
  assignments: Assignment[];
}

// 初始状态
const initialState: AssignmentsState = {
  assignments: [], // 初始为空数组
};



const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload; // 设置作业列表
    },
    addAssignment: (state, { payload: assignment }) => {
      state.assignments.push(assignment); // 添加新作业
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      ); // 删除作业
    },
    updateAssignment: (state, { payload: assignment }) => {
      const index = state.assignments.findIndex(
        (a: any) => a._id === assignment._id
      );
      if (index !== -1) {
        state.assignments[index] = assignment; // 更新作业
      }
    },
  },
});
export const { setAssignments, addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
