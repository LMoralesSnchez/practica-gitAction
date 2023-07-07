import { Module } from '@nestjs/common';
import { PeliculaService } from './pelicula.service';
import { PeliculaResolver } from './pelicula.resolver';
import { Pelicula } from './entities/pelicula.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [PeliculaService, PeliculaResolver],
   imports:[
    TypeOrmModule.forFeature([Pelicula])
   ]
})
export class PeliculaModule {}
