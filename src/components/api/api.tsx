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
        // let list: TaskModel[]
        // if (currentPage ===1)  {
        //     list =  [
        //     {id: 1, message: 'помыть полы'},
        //     {id: 2, message: 'поучиться'},
        //     {id: 3, message: 'захватить мир'},
        //     {id: 4, message: 'хреначить на автобусе в 8 утра на другой конец города'},
        //     {id: 5, message: 'пересадить волосы'}
        // ]
        // } else if (currentPage ===2) {
        //     list =  [
        //         {id: 6, message: 'попить говна'},
        //         {id: 7, message: 'заебаться'},
        //     ]
        // } else {
        //     list = []
        // }

        // return {
        //    data: {
        //     list,
        //     total: 7
        //    }
        // }
    }

    export const addNewTaskAPI = (message:string) => {
        return instance.post('task', {message})
        // return {
        //     id: 10,
        //     message: message
        // }
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
        debugger
        const response = await instance.put(`task/${taskId}`, { isDone })
        return response.data
    } catch (e) {
        debugger
        throw e
    }
    
}