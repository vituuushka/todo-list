import { TaskModel } from "./task.model"
export interface DefaultInitState {
    tasks: TaskModel[],
    currentPage: number,
    pageSize: number,
    loading: boolean,
    total: number,
    newTaskText: string
  }
  export enum TasksActionTypes {
   GET_TASKS = "GET_TASKS",
   SET_TOTAL = "SET_TOTAL",
   SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
   UPDATE_TEXT = "UPDATE_TEXT",
   ADD_NEW_TASK = "ADD_NEW_TASK",
   REMOVE_TASK = "REMOVE_TASK",
   TUGGLE_IS_FETCHING = "TUGGLE_IS_FETCHING",
   CHANGE_DONE_STATUS = "CHANGE_DONE_STATUS",
   UPDATE_TASK_MESSAGE = "UPDATE_TASK_MESSAGE"
  }
  interface GetTasksAction {
    type: TasksActionTypes.GET_TASKS,
    payload: TaskModel[]
  }
  interface SetTotalAction {
    type: TasksActionTypes.SET_TOTAL,
    payload: number
  }
  interface SetCurrentPageAction {
    type: TasksActionTypes.SET_CURRENT_PAGE,
    payload: number
  }
  interface UpdateTextAction {
    type: TasksActionTypes.UPDATE_TEXT,
    payload: string
  }
  interface AddNewTaskAction {
    type: TasksActionTypes.ADD_NEW_TASK,
    payload: TaskModel
  }
  interface RemoveTaskAction {
    type: TasksActionTypes.REMOVE_TASK,
    payload: string
  }
  interface FetchTaskAction {
    type: TasksActionTypes.TUGGLE_IS_FETCHING,
    payload: boolean
  }
  interface ChangeDoneStatusAction {
    type: TasksActionTypes.CHANGE_DONE_STATUS,
    payload: {taskId:string, isDone: boolean}
  }
  interface UpdateTaskMessageAction {
    type: TasksActionTypes.UPDATE_TASK_MESSAGE,
    payload: {taskId:string, message: string}
  }
  export type TasksAction = GetTasksAction|SetTotalAction|SetCurrentPageAction|
  UpdateTextAction|AddNewTaskAction|RemoveTaskAction|FetchTaskAction|ChangeDoneStatusAction|
  UpdateTaskMessageAction