import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType('User')
export class UserEntity {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  @Field((type) => ID)
  id: string;

  @Column()
  @Field({ nullable: true })
  nameUser: string;

  @Column()
  @Field({ nullable: true })
  phoneUser: string;

  @Column()
  @Field({ nullable: true })
  emailUser: string;

  @Column()
  @Field({ nullable: true })
  passwordUser: string;

  @Column()
  @Field()
  inscriptionUser: boolean;

  @Column()
  @Field()
  statusUser: number;
}
