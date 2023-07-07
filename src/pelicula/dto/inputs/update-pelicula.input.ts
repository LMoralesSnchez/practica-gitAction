import { IsUUID } from 'class-validator';
import { CreatePeliculaInput } from './create-pelicula.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdatePeliculaInput extends PartialType(CreatePeliculaInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
