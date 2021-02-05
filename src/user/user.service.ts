import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInput } from './DTO/UserInput.dto';
import { User } from './model/user.model';
import { UserDocument } from './Schemas/User.schema';

@Injectable()
export class UserService {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	async create(userInput: UserInput): Promise<User> {
		return await this.userModel.create(userInput);
	}

	async findAll(): Promise<User[]> {
		return this.userModel.find();
	}
}
