import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule,MongooseModule.forRoot("mongodb://0.0.0.0:27017/nest-tutorial")],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
