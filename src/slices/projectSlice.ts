import { createSlice } from '@reduxjs/toolkit';

interface ProjectDetails {
  id: string;
  order: number;
  title: string;
  iconKey: string;
}

const initialState: {
  projectList: ProjectDetails[];
  selectedProject: string;
} = {
  projectList: [],
  selectedProject: ''
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects(state, action) {
      state.projectList = action.payload as ProjectDetails[];
    },

    addNewProject(state, action) {
      state.projectList.push(action.payload as ProjectDetails);
    },

    setSelectedProject(state, action) {
      state.selectedProject = action.payload as string;
    },

    editProject(state, action) {
      const { id, title, iconKey } = action.payload as ProjectDetails;
      const editedProject = state.projectList.find(p => p.id === id);

      if (editedProject) {
        editedProject.title = title;
        editedProject.iconKey = iconKey;
      }
    },

    deleteProject(state, action) {
      state.projectList = state.projectList.filter(
        p => p.id !== action.payload
      );
    }
  }
});

const projectActions = projectSlice.actions;
const projectReducer = projectSlice.reducer;

export { type ProjectDetails, projectActions, projectReducer };
