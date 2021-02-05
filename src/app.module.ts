import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
	imports: [
		GraphQLModule.forRoot({
			autoSchemaFile: true,
			sortSchema: true
		}),
		MongooseModule.forRoot('mongodb://localhost/nest'),
		UserModule
	]
})
export class AppModule {}
