const ERROR_SERVICE_WORKER = 'Failed to register a service worker.' as const;

const ERROR_PROJECTS_SET = 'Failed to sort projects.' as const;
const ERROR_PROJECT_ADD = 'Failed to add project.' as const;
const ERROR_PROJECT_EDIT = 'Failed to edit project.' as const;
const ERROR_PROJECT_DELETE = 'Failed to delete project.' as const;

const ERROR_TODO_ADD = 'Failed to add todo.' as const;
const ERROR_TODO_EDIT = 'Failed to edit todo.' as const;
const ERROR_TODO_DELETE = 'Failed to delete todo.' as const;

const ERROR_LOGIN = 'Failed to login.' as const;
const ERROR_LOGOUT = 'Failed to logout.' as const;
const ERROR_SYNC = 'Failed to sync user data.' as const;

export {
  ERROR_SERVICE_WORKER,
  ERROR_PROJECTS_SET,
  ERROR_PROJECT_ADD,
  ERROR_PROJECT_EDIT,
  ERROR_PROJECT_DELETE,
  ERROR_TODO_ADD,
  ERROR_TODO_EDIT,
  ERROR_TODO_DELETE,
  ERROR_LOGIN,
  ERROR_LOGOUT,
  ERROR_SYNC
};
