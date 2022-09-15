import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, isUUID, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @IsOptional()
  username?: string;
  
  @IsEmail()
  @MaxLength(255)
  @MinLength(10)
  email: string;

  @IsString()
  @MinLength(5)
  @MaxLength(255)
  @IsNotEmpty()
  password: string;  

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;

  @IsBoolean()
  @IsOptional()
  is_admin?: boolean;

  @IsBoolean()
  @IsOptional()
  is_staff?: boolean;

}
