import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String)
  readonly name: string;

  @Field(() => Int)
  readonly age?: number;

  @Field()
  readonly email: string;

  @Field()
  readonly password: string;
}
