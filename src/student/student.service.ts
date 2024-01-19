import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { v4 as uuid4 } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: EntityRepository<Student>,
  ) {}

  async getAllStudents(): Promise<Student[]> {
    return this.studentRepository.findAll();
  }

  createStudent(name: string, email: string, age: number): Promise<Student> {
    const newStudent = this.studentRepository.create({
      id: uuid4(),
      name,
      email,
      age,
    });

    console.log(newStudent);

    return this.studentRepository.upsert(newStudent);
  }
}
