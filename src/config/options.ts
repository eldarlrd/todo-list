type STAGE = 'Todo' | 'In Progress' | 'Done';
type VIEW = 'All' | STAGE;

const STAGE_OPTIONS: STAGE[] = ['Todo', 'In Progress', 'Done'] as const;
const VIEW_OPTIONS: VIEW[] = ['All', 'Todo', 'In Progress', 'Done'] as const;
const TOAST_LIMIT = 2 as const;

export { STAGE_OPTIONS, VIEW_OPTIONS, TOAST_LIMIT };
