import { Injectable } from '@nestjs/common';
import { task, TaskStatus} from "./tasks.entity"
import { v4 } from 'uuid'
import {UpdateTaskDto} from './dto/task.dto';

@Injectable()
export class TasksService {
    private tasks: task[] = [{
        id: "1",
        title: 'tarea noseque',
        description: ' esta es una tarea',
        status: TaskStatus.PENDING
    },]

    getAllTaks(){
        return this.tasks;
    }
    createTaks(title: string, description: string){
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(task)

        return task;
    }
    
    deleteTaks(id: string){
        this.tasks = this.tasks.filter(task => task.id !== id)
    }

    getTasksById(id: string): task{
       return this.tasks.find(task => task.id === id)
    }

    updateTaks(id: string, updatedFields: UpdateTaskDto): task{
        const task = this.getTasksById(id)
        const newTask  = Object.assign(task, updatedFields)
        this.tasks.map(task => task.id === id ? newTask : task)

        return newTask
    }
}
