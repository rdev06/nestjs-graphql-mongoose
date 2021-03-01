import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdateUserInput, UserInput } from './DTO/UserInput.dto';
import { User } from './model/user.model';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  async createUser(@Args('userData') userData: UserInput): Promise<User> {
    return this.userService.create(userData);
  }
  @Mutation(() => Boolean)
  async updateUser(
    @Args('query') query: UpdateUserInput,
    @Args('update') update: UpdateUserInput
  ) {
    return this.userService.updateOne(query, update);
  }
}
