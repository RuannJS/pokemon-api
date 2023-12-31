import { Injectable, ConflictException } from '@nestjs/common';
import { DataService } from './services/parseData/parsedata.service';
import { PrismaService } from './services/prisma/prisma.service';
import { Pokemon } from './entity/pokemon.entity';

@Injectable()
export class AppService {
  constructor(
    private readonly parseService: DataService,
    private readonly prismaService: PrismaService,
  ) {}

  validatePokemons(): Pokemon[] {
    const validationError = (pokemon: Pokemon) => {
      throw new ConflictException(
        `Error validating Pokemon - ${pokemon.pokedexNumber}`,
      );
    };

    const seed = this.parseService.parsePokemons();

    const validatedPokemons = seed.map((pokemon) => {
      pokemon.imgName = pokemon.imgName.toString();

      if (pokemon.name === undefined) {
        validationError(pokemon);
      }

      if (pokemon.pokedexNumber === undefined) {
        throw new ConflictException(
          'Invalid pokedex number, please provide one.',
        );
      }

      if (pokemon.generation === undefined) {
        validationError(pokemon);
      }

      if (pokemon.familyID === undefined) {
        pokemon.familyID = 0;
      }

      if (pokemon.type2 === undefined) {
        pokemon.type2 = 'none';
      }

      if (pokemon.weather2 === undefined) {
        pokemon.weather2 = 'none';
      }

      if (pokemon.evolutionStage === undefined) {
        pokemon.evolutionStage = 'none';
      } else {
        pokemon.evolutionStage = pokemon.evolutionStage.toString();
      }
      return pokemon;
    });

    return validatedPokemons;
  }

  async seedDatabase(): Promise<string> {
    const seed = this.validatePokemons();
    const seeded = this.prismaService.pokemon.createMany({
      data: seed.map((pokemon) => {
        return pokemon;
      }),
    });

    if (!seeded) {
      throw new ConflictException('There was an error, please try again!');
    }

    return 'Database was successfully seeded!';
  }
}
