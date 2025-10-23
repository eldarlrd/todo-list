import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
  writeBatch
} from 'firebase/firestore/lite';

import { db } from '@/lib/firebase.ts';
import { type ProjectDetails } from '@/slices/projectSlice.ts';
import { type TodoDetails } from '@/slices/todoSlice.ts';

const BATCH_LIMIT = 500; // Firestore Batch Limit

// * Cloud is the Source of Truth
// TODO: Add error toasts
const fetchAllData = async (
  uid: string
): Promise<{ projects: ProjectDetails[]; todos: TodoDetails[] }> => {
  const projectsRef = collection(db, 'users', uid, 'projects');
  const todosRef = collection(db, 'users', uid, 'todos');

  const [projectsSnap, todosSnap] = await Promise.all([
    getDocs(projectsRef),
    getDocs(todosRef)
  ]);

  const projects = projectsSnap.docs.map(d => ({
    id: d.id,
    ...d.data()
  })) as ProjectDetails[];

  const todos = todosSnap.docs.map(d => ({
    id: d.id,
    ...d.data()
  })) as TodoDetails[];

  return { projects, todos };
};

const addProjects = async (
  uid: string,
  projects: ProjectDetails[]
): Promise<void> => {
  for (let i = 0; i < projects.length; i += BATCH_LIMIT) {
    const chunk = projects.slice(i, i + BATCH_LIMIT);
    const batch = writeBatch(db);

    chunk.forEach(project => {
      const { id, ...data } = project;
      const projectRef = doc(db, 'users', uid, 'projects', id);

      batch.set(projectRef, data);
    });

    await batch.commit();
  }
};

const addProject = async (
  uid: string,
  project: Omit<ProjectDetails, 'id'>
): Promise<string> => {
  const projectsRef = collection(db, 'users', uid, 'projects');
  const docRef = await addDoc(projectsRef, project);

  return docRef.id;
};

const updateProject = async (
  uid: string,
  projectId: string,
  updates: Partial<Omit<ProjectDetails, 'id'>>
): Promise<void> => {
  const projectRef = doc(db, 'users', uid, 'projects', projectId);

  await updateDoc(projectRef, updates);
};

const deleteProject = async (uid: string, projectId: string): Promise<void> => {
  const batch = writeBatch(db);
  const projectRef = doc(db, 'users', uid, 'projects', projectId);

  batch.delete(projectRef);

  // Deletes Todos associated with a deleted Project
  const todosRef = collection(db, 'users', uid, 'todos');
  const q = query(todosRef, where('project', '==', projectId));
  const todosSnap = await getDocs(q);

  todosSnap.docs.forEach(d => {
    batch.delete(d.ref);
  });

  await batch.commit();
};

const addTodos = async (uid: string, todos: TodoDetails[]): Promise<void> => {
  for (let i = 0; i < todos.length; i += BATCH_LIMIT) {
    const chunk = todos.slice(i, i + BATCH_LIMIT);
    const batch = writeBatch(db);

    chunk.forEach(todo => {
      const { id, ...data } = todo;
      const todoRef = doc(db, 'users', uid, 'todos', id);

      batch.set(todoRef, data);
    });

    await batch.commit();
  }
};

const addTodo = async (
  uid: string,
  todo: Omit<TodoDetails, 'id'>
): Promise<string> => {
  const todosRef = collection(db, 'users', uid, 'todos');
  const docRef = await addDoc(todosRef, todo);

  return docRef.id;
};

const updateTodo = async (
  uid: string,
  todoId: string,
  updates: Partial<Omit<TodoDetails, 'id'>>
): Promise<void> => {
  const todoRef = doc(db, 'users', uid, 'todos', todoId);

  await updateDoc(todoRef, updates);
};

const deleteTodo = async (uid: string, todoId: string): Promise<void> => {
  const todoRef = doc(db, 'users', uid, 'todos', todoId);

  await deleteDoc(todoRef);
};

export {
  fetchAllData,
  addProjects,
  addProject,
  updateProject,
  deleteProject,
  addTodos,
  addTodo,
  updateTodo,
  deleteTodo
};
