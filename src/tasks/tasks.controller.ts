import { Body, Controller, Delete, Get, Param, Patch, Post, Put} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto'

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}
    @Get()
    getAllTasks(){
        return this.tasksService.getAllTaks();
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDto){
       return this.tasksService.createTaks(newTask.title, newTask.description)
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        this.tasksService.deleteTaks(id)
        return 'Eliminar Usuario con el Id: ' + id;

    }

    @Patch(':id')
    updateTask(@Param('id')id: string, @Body() updatedFields: UpdateTaskDto){
        return this.tasksService.updateTaks(id, updatedFields)
    }
}

