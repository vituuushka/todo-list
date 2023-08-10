import {
  addNewTaskAPI,
  getTasksAPI,
  removeTaskAPI,
} from "../components/api/api";
import { TaskModel } from "../types/task.model";
import { DefaultInitState, TasksActionTypes,TasksAction } from "../types/taskreducerTypes";



const DEFAULT_INIT_STATE: DefaultInitState = {
  tasks: [],
  currentPage: 1,
  pageSize: 10,
  loading: false,
  total: 0,
  newTaskText: ""
};


const tasksReducer = (state: DefaultInitState = DEFAULT_INIT_STATE, action: TasksAction): DefaultInitState => {
  switch (action.type) {
    case TasksActionTypes.GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case TasksActionTypes.SET_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    case TasksActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case TasksActionTypes.UPDATE_TEXT:
      return {
        ...state,
        newTaskText: action.payload,
      };
    case TasksActionTypes.ADD_NEW_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        newTaskText: "",
      };
    case TasksActionTypes.REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((t: any) => t.id !== action.payload),
      };

    default:
      return state;
  }
};

const getTasksAC = (tasks: TaskModel[]) => ({ type: TasksActionTypes.GET_TASKS, payload: tasks });
const setTotalAC = (total: number) => ({ type: TasksActionTypes.SET_TOTAL, payload: total });
export const setCurrentPage = (currentPage: number) => ({
  type: TasksActionTypes.SET_CURRENT_PAGE,
  payload: currentPage,
});
export const updateTaskText 


= (text: any) => ({ type: TasksActionTypes.UPDATE_TEXT, payload: text });
export const addNewTaskAC = (task: any) => ({ type: TasksActionTypes.ADD_NEW_TASK, payload: task });
const removeTaskAC = (taskId: string) => ({ type: TasksActionTypes.REMOVE_TASK, payload: taskId });

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
