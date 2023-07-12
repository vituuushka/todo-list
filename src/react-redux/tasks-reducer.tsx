import { getTasksAPI } from "../components/api/api"
import { TaskModel } from "../types/task.model"

const GET_TASKS = 'GET_TASKS'
const SET_TOTAL = 'SET_TOTAL'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initialState = {
    tasks: null,
    currentPage: 1,
    pageSize: 5,
    loading: false,
    total: null

}

const tasksReducer = (state: any = initialState, action: any) => {
switch(action.type) {
    case GET_TASKS:
        return {
            ...state, tasks: action.tasks
        }
    case SET_TOTAL:
        return {
            ...state, total: action.total
        }
    case SET_CURRENT_PAGE:
        return {
            ...state, currentPage: action.currentPage
        }
default:
    return state
}
}

// TaskModel[]
const getTasksAC = (tasks: TaskModel[]) => ({type:GET_TASKS, tasks })
const setTotalAC = (total: number) => ({type:SET_TOTAL, total })
export const setCurrentPage = (currentPage: number) => ({type:SET_CURRENT_PAGE, currentPage })

export const getTasks =(currentPage: number, pageSize:number) => async (dispatch: any) => {
const { data: { list, total } } = await getTasksAPI(currentPage, pageSize)
dispatch(getTasksAC(list))
dispatch(setTotalAC(total))
}

export default tasksReducer