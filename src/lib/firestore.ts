import { doc, getDoc, setDoc, deleteDoc } from 'firebase/firestore/lite';

import { db } from '@/lib/firebase.ts';
import { type ProjectDetails } from '@/slices/projectSlice.ts';
import { type TodoDetails } from '@/slices/todoSlice.ts';

interface UserData {
  todos: TodoDetails[];
  projects: ProjectDetails[];
  selectedProject: string;
  viewMode: string;
  sortMode: string;
  sortAscending: number;
}

// FIXME: All Firestore crawling with bugs
const fetchUserData = async (
  userId: string
): Promise<UserData | null | undefined> => {
  try {
    const userDocRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) return userDoc.data() as UserData;

    return null;
  } catch (error: unknown) {
    if (error instanceof Error)
      console.error('Failed to fetch user data:', error);
  }
};

const saveUserData = async (userId: string, data: UserData): Promise<void> => {
  try {
    const userDocRef = doc(db, 'users', userId);

    await setDoc(userDocRef, data, { merge: true });
  } catch (error: unknown) {
    if (error instanceof Error) console.error('Error saving user data:', error);
  }
};

const saveTodos = async (
  userId: string,
  todos: TodoDetails[]
): Promise<void> => {
  try {
    const userDocRef = doc(db, 'users', userId);

    await setDoc(userDocRef, { todos }, { merge: true });
  } catch (error: unknown) {
    if (error instanceof Error) console.error('Error saving todos:', error);
  }
};

const saveProjects = async (
  userId: string,
  projects: ProjectDetails[],
  selectedProject: string
): Promise<void> => {
  try {
    const userDocRef = doc(db, 'users', userId);

    await setDoc(userDocRef, { projects, selectedProject }, { merge: true });
  } catch (error: unknown) {
    if (error instanceof Error) console.error('Error saving projects:', error);
  }
};

const savePreferences = async (
  userId: string,
  preferences: {
    viewMode: string;
    sortMode: string;
    sortAscending: number;
  }
): Promise<void> => {
  try {
    const userDocRef = doc(db, 'users', userId);

    await setDoc(userDocRef, preferences, { merge: true });
  } catch (error: unknown) {
    if (error instanceof Error)
      console.error('Error saving preferences:', error);
  }
};

const mergeTodos = (
  localTodos: TodoDetails[],
  cloudTodos: TodoDetails[]
): TodoDetails[] => {
  const todoMap = new Map<string, TodoDetails>();

  cloudTodos.forEach(todo => todoMap.set(todo.id, todo));
  localTodos.forEach(todo => {
    const existing = todoMap.get(todo.id);

    if (!existing) todoMap.set(todo.id, todo);
  });

  return Array.from(todoMap.values());
};

const mergeProjects = (
  localProjects: ProjectDetails[],
  cloudProjects: ProjectDetails[]
): ProjectDetails[] => {
  const projectMap = new Map<string, ProjectDetails>();

  cloudProjects.forEach(project => projectMap.set(project.id, project));
  localProjects.forEach(project => {
    const existing = projectMap.get(project.id);

    if (!existing) projectMap.set(project.id, project);
  });

  return Array.from(projectMap.values());
};

const syncLocalToFirestore = async (
  userId: string,
  localData: UserData
): Promise<UserData | undefined> => {
  try {
    const existingData = await fetchUserData(userId);

    if (!existingData) {
      await saveUserData(userId, localData);

      return localData;
    }
    const mergedData: UserData = {
      // Merge Local & Cloud States
      todos: mergeTodos(localData.todos, existingData.todos),
      projects: mergeProjects(localData.projects, existingData.projects),

      // Cloud Priority
      selectedProject:
        existingData.selectedProject || localData.selectedProject,
      viewMode: existingData.viewMode,
      sortMode: existingData.sortMode,
      sortAscending: existingData.sortAscending
    };

    await saveUserData(userId, mergedData);

    return mergedData;
  } catch (error: unknown) {
    if (error instanceof Error)
      console.error('Failed to sync Firestore:', error);
  }
};

const deleteUserData = async (userId: string): Promise<void> => {
  try {
    const userDocRef = doc(db, 'users', userId);

    await deleteDoc(userDocRef);
  } catch (error: unknown) {
    if (error instanceof Error)
      console.error('Error deleting user data:', error);
  }
};

export {
  fetchUserData,
  saveUserData,
  saveTodos,
  saveProjects,
  savePreferences,
  syncLocalToFirestore,
  deleteUserData
};
