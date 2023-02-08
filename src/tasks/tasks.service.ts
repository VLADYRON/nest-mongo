import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {

   constructor(@InjectModel("Task") private readonly taskModel: Model<Task>) { }

   async all() {
      return await this.taskModel.find();
   }

   async find(id: string) {
      return await this.taskModel.findById(id);
   }

   async save(task: TaskDto) {
      const newTask = new this.taskModel(task);
      return await newTask.save();
   }

   async delete(id: string): Promise<Task> {
      return this.taskModel.findByIdAndRemove(id);
   }

   async update(id: string, taskDto: TaskDto): Promise<Task> {
      return await this.taskModel.findByIdAndUpdate(id, taskDto, { new: true });
   }

}
