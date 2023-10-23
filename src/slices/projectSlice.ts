import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

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
      id: nanoid(),
      title: 'Default',
      iconKey: 'star'
    }
  ],
  get selectedProject() {
    return this.projectList[0]?.id;
  }
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setSelectedProject(state, action) {
      state.selectedProject = action.payload as string;
    },
    addNewProject(state, action) {
      state.projectList.push(
        action.payload as { id: string; title: string; iconKey: string }
      );
    },
    deleteProject(state, action) {
      state.projectList = state.projectList.filter(
        e => e.id !== action.payload
      );
    }
  }
});

const projectActions = projectSlice.actions;
const projectReducer = projectSlice.reducer;

export { projectActions, projectReducer };
