import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { Student } from './student.entity';
import { StudentType } from './student.type';

@Resolver()
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  //Queries
  @Query(() => [StudentType])
  async students(): Promise<Student[]> {
    return this.studentService.getAllStudents();
  }

  //Mutations
  @Mutation(() => StudentType)
  async createStudent(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('age') age: number,
  ): Promise<Student> {
    return this.studentService.createStudent(name, email, age);
  }
}
