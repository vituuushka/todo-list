import axios from "axios";
import { TaskModel } from "../../types/task.model";

const instance = axios.create( {
baseURL: ''
})

type GetTaskResponse  = {
    data: TaskModel[]
}
export const getTasksAPI = async (currentPage: number, pageSize:number):Promise<GetTaskResponse> => {
    return {
        data: [
            {id: 1, message: 'помыть полы'},
            {id: 2, message: 'поучиться'},
            {id: 3, message: 'захватить мир'},
            {id: 4, message: 'хреначить на автобусе в 8 утра на другой конец города'},
            {id: 5, message: 'пересадить волосы'},
            {id: 6, message: 'постричь газон'}
        ]
    }
}