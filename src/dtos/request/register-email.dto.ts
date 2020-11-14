import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterEmailDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}