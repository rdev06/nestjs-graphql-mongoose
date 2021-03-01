import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateUserInput, UserInput } from './DTO/UserInput.dto';
import { User } from './model/user.model';
import { UserDocument } from './Schemas/User.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(userInput: UserInput): Promise<UserDocument> {
    return await this.userModel.create(userInput);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async updateOne(
    query: UpdateUserInput,
    update: UpdateUserInput
  ): Promise<boolean> {
    const Result = await this.userModel.updateOne(
      query,
      { $set: update },
      { runValidators: true }
    );
    if (Result.nModified) return true;
    else return false;
  }
}
