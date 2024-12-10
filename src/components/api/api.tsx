import axios from "axios";
import { TaskModel } from "../../types/task.model";

const instance = axios.create( {
baseURL: 'http://192.168.0.129:4222/',
timeout: 10000,
})

type TaskListResponse = {
        data: TaskModel[],
        total: number
    
}


export const getTasksAPI = async (currentPage: number, pageSize:number): Promise<TaskListResponse> => {
    try {
        const res = await instance.get<TaskListResponse>(`task?page=${currentPage-1}&pageSize=${pageSize}`)
        return res.data
    } catch (e) {
        console.log(e)
        throw e
    }
    }

    export const addNewTaskAPI = (message:string) => {
        return instance.post('task', {message})
    }
    export const removeTaskAPI = async (taskId: string) => {
        try {
            const response =  await instance.delete(`task/${taskId}`)
            return response.data
        } catch (e) {
            throw e
        }
        
    }
export const changeDoneStatusAPI = async(taskId: string, isDone:boolean) => {
    try{
        const response = await instance.put(`task/${taskId}`, { isDone })
        return response.data
    } catch (e) {
        throw e
    }
    
}

export const updateTaskMessageAPI = async(taskId: string, message: string) => {
    try {
        debugger
        const res = await instance.put(`task/${taskId}`, { message })
        return res
    } catch (e) {
        debugger
        throw e
    }
}
