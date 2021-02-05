import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
class NameInput {
	@Field()
	readonly firstName?: string;

	@Field()
	readonly lastName?: string;
}

@InputType()
export class UserInput {
	@Field(() => NameInput)
	readonly name: NameInput;

	@Field(() => Int)
	readonly age?: number;

	@Field()
	readonly email: string;

	@Field()
	readonly password: string;
}
