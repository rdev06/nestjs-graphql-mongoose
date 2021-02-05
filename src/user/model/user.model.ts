import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
class Name {
	@Field()
	readonly firstName?: string;

	@Field()
	readonly lastName?: string;
}

@ObjectType()
export class User {
	@Field(() => Name)
	readonly name: Name;

	@Field(() => Int)
	readonly age?: number;

	@Field()
	readonly email: string;

	@Field()
	readonly password: string;
}
