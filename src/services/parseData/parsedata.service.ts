import { Injectable } from '@nestjs/common';
import { Pokemon } from '../../entity/pokemon.entity';
//@ts-ignore
import { parsedPokedex } from '../../dataParse/data';

@Injectable()
export class DataService {
  parsePokemons() {
    const pokemons = parsedPokedex.map((pokemon) => new Pokemon(pokemon));

    return pokemons;
  }
}
