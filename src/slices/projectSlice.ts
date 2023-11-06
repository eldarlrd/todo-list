import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  projectList: {
    id: string;
    title: string;
    iconKey: string;
  }[];
  selectedProject: string;
} = {
  projectList: [],
  selectedProject: ''
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    sortProjects(state, action) {
      state.projectList = action.payload as {
        id: string;
        title: string;
        iconKey: string;
      }[];
    },

    setSelectedProject(state, action) {
      state.selectedProject = action.payload as string;
    },

    addNewProject(state, action) {
      state.projectList.push(
        action.payload as { id: string; title: string; iconKey: string }
      );
    },

    editProject(state, action) {
      const { id, title, iconKey } = action.payload as {
        id: string;
        title: string;
        iconKey: string;
      };
      const editedProject = state.projectList.find(e => e.id === id);
      if (editedProject) {
        editedProject.title = title;
        editedProject.iconKey = iconKey;
      }
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
