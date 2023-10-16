import { createSlice } from '@reduxjs/toolkit';

interface StateType {
  selectedProject: string[];
  projectList: string[];
}

const initialState: StateType = {
  selectedProject: [],
  projectList: []
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setSelectedProject(state, action) {
      state.selectedProject = action.payload as string[];
    }
  }
});

const projectActions = projectSlice.actions;
const projectReducer = projectSlice.reducer;

export { projectActions, projectReducer };
