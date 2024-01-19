import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Student } from './student.entity';
import { StudentResolver } from './student.resolver';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Student] })],
  providers: [StudentService, StudentResolver],
})
export class StudentModule {}
