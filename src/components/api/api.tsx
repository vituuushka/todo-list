import axios from "axios";
import { TaskModel } from "../../types/task.model";

const instance = axios.create( {
baseURL: ''
})

type TaskListResponse = {
    data: {
        list: TaskModel[],
        total: number
    }
}


export const getTasksAPI = async (currentPage: number, pageSize:number): Promise<TaskListResponse> => {
        let list: TaskModel[]
        if (currentPage ===1)  {
            list =  [
            {id: 1, message: 'помыть полы'},
            {id: 2, message: 'поучиться'},
            {id: 3, message: 'захватить мир'},
            {id: 4, message: 'хреначить на автобусе в 8 утра на другой конец города'},
            {id: 5, message: 'пересадить волосы'}
        ]
        } else if (currentPage ===2) {
            list =  [
                {id: 6, message: 'попить говна'},
                {id: 7, message: 'заебаться'},
            ]
        } else {
            list = []
        }

        return {
           data: {
            list,
            total: 7
           }
        }
    }
