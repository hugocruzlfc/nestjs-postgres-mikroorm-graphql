import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StudentType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => Int, { nullable: true })
  age: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
