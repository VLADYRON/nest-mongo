import { Controller, Get, Post,Body, Delete, Param,Put } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { Task } from './interfaces/Task';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private taskService:TasksService){}

    @Get()
    findAll(): Promise<Task[]>{
        return this.taskService.all();
    }

    @Get(":id")
    findOne(@Param("id") id:string): Promise<Task>{
        return this.taskService.find(id);
    }

    @Post()
    create(@Body() task:TaskDto):Promise<Task>{
        return this.taskService.save(task);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<Task> {
      return this.taskService.delete(id);
    }

    @Put(':id')
    update(@Body() taskDto: TaskDto, @Param('id') id: string): Promise<Task> {
      return this.taskService.update(id, taskDto);
    }


}
