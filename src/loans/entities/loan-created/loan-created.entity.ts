import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'loans'})
export class LoanCreated {
  @PrimaryGeneratedColumn()
  id: string;

  @Column('text')
  encodekey: string;

  @Column('text')
  loanName: string;

  @Column('int')
  loanAmount: number;

  @Column('text')
  accountHolderKey: string;
}
