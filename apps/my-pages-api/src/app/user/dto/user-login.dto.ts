import { IsNotEmpty, IsString } from 'class-validator';

export class UserLoginDto {
  @IsString({ message: 'Page должен быть строкой' })
  @IsNotEmpty({ message: 'Не должно быть пустым' })
  readonly login: string;
  @IsString({ message: 'Page должен быть строкой' })
  @IsNotEmpty({ message: 'Не должно быть пустым' })
  readonly password: string;
}
