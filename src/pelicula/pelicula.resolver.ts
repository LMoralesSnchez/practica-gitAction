import { Resolver, ID, Mutation, Query, Args } from '@nestjs/graphql';
import { Pelicula } from './entities/pelicula.entity';
import { ParseUUIDPipe } from '@nestjs/common';
import { CreatePeliculaInput, UpdatePeliculaInput } from './dto/inputs';
import { PeliculaService } from './pelicula.service';


@Resolver(()=> Pelicula)
export class PeliculaResolver {
  constructor(private readonly peliculasService: PeliculaService) {}

  @Mutation(() => Pelicula)
  async createPelicula(
    @Args('createPeliculaInput') createPeliculaInput: CreatePeliculaInput,
  ): Promise<Pelicula> {
    return this.peliculasService.create(createPeliculaInput);
  }

  @Query(() => [Pelicula], { name: 'peliculas' })
  async findAll(): Promise<Pelicula[]> {
    return this.peliculasService.findAll();
  }

  @Query(() => Pelicula, { name: 'peliculas' })
  findOne(
    @Args('id', { type: () => ID }, ParseUUIDPipe) id: string,
  ): Promise<Pelicula> {
    return this.peliculasService.findOne(id);
  }

  @Mutation(() => Pelicula)
  updatePelicula(
    @Args('updatePeliculaInput') updatePeliculaInput: UpdatePeliculaInput,
  ): Promise<Pelicula> {
    return this.peliculasService.update(updatePeliculaInput.id, updatePeliculaInput);
  }

  @Mutation(() => Pelicula)
  removePelicula(@Args('id', { type: () => ID }) id: string): Promise<Pelicula> {
    return this.peliculasService.remove(id);
  }
}

