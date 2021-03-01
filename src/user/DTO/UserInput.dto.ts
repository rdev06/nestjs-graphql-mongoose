import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field(() => String)
  readonly name: string;

  @Field(() => Int)
  readonly age?: number;

  @Field()
  readonly email: string;

  @Field()
  readonly password: string;
}

@InputType()
export class UpdateUserInput extends PartialType(UserInput) {}
