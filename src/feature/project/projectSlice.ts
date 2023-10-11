import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface ProjectState {
  value: [];
  status: "idle" | "loading" | "failed";
}

const initialState: ProjectState = {
  value: [],
  status: "idle",
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    getProject: (state, action: PayloadAction<[]>) => {
      state.value = action.payload;
    },
  },
});

export const { getProject } = projectSlice.actions;

export const selectProject = (state: RootState) => state.project.value;

export default projectSlice.reducer;
