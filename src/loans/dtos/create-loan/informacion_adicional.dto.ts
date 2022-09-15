import { IsString } from 'class-validator';

export class _Informacion_Adicional {
  @IsString()
  Codigo_Promotor: string;
}
