import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './Schemas/User.schema';
import { User } from './model/user.model';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: User.name, schema: userSchema }])
	],
	providers: [UserService, UserResolver]
})
export class UserModule {}
