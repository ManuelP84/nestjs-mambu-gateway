import { ChangeStateDto } from 'src/loans/dtos/change-state/change-state.dto';

export class ChangeStateCommand {
  constructor(
    public readonly changeStateDto: ChangeStateDto,
    public readonly loanAccountId: string,
  ) {}
}
