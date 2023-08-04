import {
  addNewTaskAPI,
  getTasksAPI,
  removeTaskAPI,
} from "../components/api/api";
import { TaskModel } from "../types/task.model";

const GET_TASKS = "GET_TASKS";
const SET_TOTAL = "SET_TOTAL";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const UPDATE_TEXT = "UPDATE_TEXT";
const ADD_NEW_TASK = "ADD_NEW_TASK";
const REMOVE_TASK = "REMOVE_TASK";

const DEFAULT_INIT_STATE = {
  tasks: null,
  currentPage: 1,
  pageSize: 10,
  loading: false,
  total: null,
  newTaskText: "",
};

const tasksReducer = (state: any = DEFAULT_INIT_STATE, action: any) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      };
    case SET_TOTAL:
      return {
        ...state,
        total: action.total,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case UPDATE_TEXT:
      return {
        ...state,
        newTaskText: action.text,
      };
    case ADD_NEW_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task],
        newTaskText: "",
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((t: any) => t.id !== action.taskId),
      };

    default:
      return state;
  }
};

const getTasksAC = (tasks: TaskModel[]) => ({ type: GET_TASKS, tasks });
const setTotalAC = (total: number) => ({ type: SET_TOTAL, total });
export const setCurrentPage = (currentPage: number) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const updateTaskText = (text: any) => ({ type: UPDATE_TEXT, text });
export const addNewTaskAC = (task: any) => ({ type: ADD_NEW_TASK, task });
const removeTaskAC = (taskId: string) => ({ type: REMOVE_TASK, taskId });

export const getTasks =
  (currentPage: number, pageSize: number) => async (dispatch: any) => {
   
    const data = await getTasksAPI(currentPage, pageSize);
    
    
    dispatch(getTasksAC(data.data));
    dispatch(setTotalAC(data.total));
  };
export const addNewTask = (newTaskText: string) => async (dispatch: any) => {
  const data = await addNewTaskAPI(newTaskText);
  dispatch (addNewTaskAC(data))
};
export const removeTask = (taskId: string) => async (dispatch: any) => {
  debugger
  const data = await removeTaskAPI(taskId);
  dispatch(removeTaskAC(data.taskId));
};
export default tasksReducer;
