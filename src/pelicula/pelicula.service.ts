import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pelicula } from './entities/pelicula.entity';
import { CreatePeliculaInput, UpdatePeliculaInput } from './dto/inputs';

@Injectable()
export class PeliculaService {
  constructor(
    @InjectRepository(Pelicula)
    private readonly peliculasRepository: Repository<Pelicula>,
  ) {}

  async create(createPeliculaInput: CreatePeliculaInput): Promise<Pelicula> {
    const newPelicula = this.peliculasRepository.create(createPeliculaInput);
    return await this.peliculasRepository.save(newPelicula);
  }

  async findAll(): Promise<Pelicula[]> {
    return this.peliculasRepository.find();
  }

  async findOne(id: string): Promise<Pelicula> {
    const Pelicula = await this.peliculasRepository.findOneBy({ id });
    if (!Pelicula) throw new NotFoundException(`Not found`);
    return Pelicula;
  }

  async update(
    id: string,
    updatePeliculaInput: UpdatePeliculaInput,
  ): Promise<Pelicula> {
    const Pelicula = await this.peliculasRepository.preload(
      updatePeliculaInput,
    );
    if (!Pelicula) throw new NotFoundException(`Not found`);
    return this.peliculasRepository.save(Pelicula);
  }

  async remove(id: string): Promise<Pelicula> {
    const Pelicula = await this.findOne(id);

    await this.peliculasRepository.update({ id: id }, { estado: false });

    // await this.peliculasRepository.remove(Pelicula);

    return { ...Pelicula, id };
  }
}
