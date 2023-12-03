import { Injectable } from '@nestjs/common';
import { Pokemon } from 'src/entity/pokemon.entity';
//@ts-ignore
import { parsedPokedex } from 'src/dataParse/data';

@Injectable()
export class DataService {
  parsePokemons() {
    const pokemons = parsedPokedex.map((pokemon) => new Pokemon(pokemon));

    return pokemons;
  }
}
