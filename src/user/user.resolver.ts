import { Resolver, Query } from '@nestjs/graphql';
import { UserEntity } from './user.entity';

@Resolver((of) => UserEntity)
export class UserResolver {
  @Query((returns) => UserEntity)
  User() {
    return {
      id: 'asddd',
      nameUser: 'Erick King',
      phoneUser: '6682658744',
      emailUser: 'eriickking@gmail.com',
      passwordUser: '123456',
      inscriptionUser: false,
      statusUser: 1,
    };
  }
}
