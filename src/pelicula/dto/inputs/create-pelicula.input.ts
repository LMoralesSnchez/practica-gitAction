import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreatePeliculaInput {

  // @Field(()=>String )
  // @IsNotEmpty()
  // identificacion:string;

  @Field(()=>String )
  @IsNotEmpty()
  nombre:string;

  @Field(()=>String )
  @IsNotEmpty()
  categoria:string;

  @Field(()=>Boolean )
  @IsOptional()
  estado:boolean;

  
}
