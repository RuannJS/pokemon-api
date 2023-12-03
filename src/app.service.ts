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
    const seed = this.parseService.parsePokemons();

    const validatedPokemons = seed.map((pokemon) => {
      pokemon.imgName = pokemon.imgName.toString();

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

  async seedDatabase() {
    const seed = this.validatePokemons();
    const seeded = this.prismaService.pokemon.createMany({
      data: seed.map((pokemon) => {
        return pokemon;
      }),
    });
    return seeded;
  }

  async listAllPokemons() {
    return this.prismaService.pokemon.findMany();
  }
}
