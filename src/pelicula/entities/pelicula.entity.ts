import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'peliculas'})
@ObjectType()
export class Pelicula {
  
    @PrimaryGeneratedColumn('uuid')
    @Field(()=> ID)
    id:string;
    
    // @Column()
    // @Field(()=> String)
    // identificacion:string;

    @Column()
    @Field(()=>String)
    nombre:string;

    @Column()
    @Field(()=>String)
    categoria:string;


    @Column()
    @Field(()=>Boolean)
    estado:boolean;


}
