import { getTasksAPI } from "../components/api/api"
import { TaskModel } from "../types/task.model"

const GET_TASKS = 'GET_TASKS'

const initialState = {
    tasks: null,
    currentPage: null,
    pageSize: 5,
    loading: false,

}

const tasksReducer = (state: any = initialState, action: any) => {
switch(action.type) {
    case GET_TASKS:
        return {
            ...state, tasks: action.tasks
        }
default:
    return state
}
}

const getTasksAC = (tasks: TaskModel[]) => ({type:GET_TASKS, tasks })

export const getTasks =(currentPage: number, pageSize:number) => async (dispatch: any) => {
const response = await getTasksAPI(currentPage, pageSize)
dispatch(getTasksAC(response.data))
}

export default tasksReducer