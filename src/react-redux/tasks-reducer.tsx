import {
  addNewTaskAPI,
  getTasksAPI,
  removeTaskAPI,
  changeDoneStatusAPI
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
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };
    case TasksActionTypes.TUGGLE_IS_FETCHING:
      return {
        ...state,
        loading: action.payload
      };
    case TasksActionTypes.CHANGE_DONE_STATUS:
      const ind = state.tasks.findIndex((task)=> (task.id === action.payload.taskId))

      const tasks = [...state.tasks]
      tasks[ind] =  {... state.tasks[ind], isDone:action.payload.isDone }
      return {
        ...state,
        tasks,
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
const changeDoneStatusAC = (taskId: string, isDone: boolean) => ({type: TasksActionTypes.CHANGE_DONE_STATUS, payload: {taskId,isDone}})
export const updateTaskText 


= (text: any) => ({ type: TasksActionTypes.UPDATE_TEXT, payload: text });
export const addNewTaskAC = (task: any) => ({ type: TasksActionTypes.ADD_NEW_TASK, payload: task });
const removeTaskAC = (taskId: string) => ({ type: TasksActionTypes.REMOVE_TASK, payload: taskId });
const toogleIsFetching = (loading: boolean) => ({type: TasksActionTypes.TUGGLE_IS_FETCHING, payload: loading})

export const getTasks =
  (currentPage: number, pageSize: number) => async (dispatch: any) => {
   dispatch(toogleIsFetching(true))
    const data = await getTasksAPI(currentPage, pageSize);
    dispatch(toogleIsFetching(false))
    dispatch(getTasksAC(data.data));
    dispatch(setTotalAC(data.total));
    
    
  };
export const addNewTask = (newTaskText: string) => async (dispatch: any) => {
  const data = await addNewTaskAPI(newTaskText);
  dispatch (addNewTaskAC(data))
};
export const removeTask = (taskId: string) => async (dispatch: any) => {
  await removeTaskAPI(taskId);
  dispatch(removeTaskAC(taskId));
};
export const changeDoneStatus = (taskId: string, isDone: boolean) => async(dispatch: any) => {
  const newDoneStatus = !isDone
  const data = await changeDoneStatusAPI(taskId, newDoneStatus);
dispatch(changeDoneStatusAC
  (taskId,newDoneStatus))
}

export default tasksReducer;
