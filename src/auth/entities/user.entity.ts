import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '.';

@Entity()
export class User {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  email: string;

  @Column('text', {
    select: false,
  })
  password: string;

  @Column('text')
  name: string;

  @Column('text')
  lastName: string;

  @Column('bool', {
    default: true,
  })
  isActive: boolean;

  // @ManyToMany(() => Role)
  // @JoinTable()
  // roles: Role[];

  //   @Column('text', {
  //     array: true,
  //     default: ['user'],
  //   })
  //   roles: string[];

  //   @BeforeInsert()
  //   checkFieldsBeforeInsert() {
  //     this.email = this.email.toLocaleLowerCase().trim();
  //   }

  //   @BeforeUpdate()
  //   checkFieldsBeforeUpdate() {
  //     this.checkFieldsBeforeInsert();
  //   }
}
