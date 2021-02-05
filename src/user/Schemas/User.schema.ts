import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = UserSchema & Document;

@Schema()
export class UserSchema {
	@Prop(
		raw({
			firstName: String,
			lastName: String
		})
	)
	name: Record<string, any>;

	@Prop(Number)
	age: number;

	@Prop({ required: true })
	email: string;

	@Prop({ required: true })
	password: string;
}

export const userSchema = SchemaFactory.createForClass(UserSchema);
