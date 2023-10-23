import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  projectList: {
    id: string;
    title: string;
    iconKey: string;
  }[];
  selectedProject: string;
} = {
  projectList: [
    {
      id: 'default',
      title: 'Default',
      iconKey: 'star'
    },
    {
      id: 'read',
      title: 'Read Books',
      iconKey: 'book'
    }
  ],
  get selectedProject() {
    return this.projectList[0].id;
  }
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setSelectedProject(state, action) {
      state.selectedProject = action.payload as string;
    }
  }
});

const projectActions = projectSlice.actions;
const projectReducer = projectSlice.reducer;

export { projectActions, projectReducer };
