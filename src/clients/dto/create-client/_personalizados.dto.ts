import { IsUUID } from "class-validator";

export class _Personalizados {
    @IsUUID()
    External_ID: string;
  }