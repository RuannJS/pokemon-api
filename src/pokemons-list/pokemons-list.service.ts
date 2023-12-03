import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { PokemonResponse } from './pokemonresponse.interface';

@Injectable()
export class PokemonsListService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPokemons(
    limit: number,
    skip: number,
  ): Promise<PokemonResponse[]> {
    var pokemons!: PokemonResponse[];

    if (isNaN(limit) && isNaN(skip)) {
      pokemons = await this.prisma.pokemon.findMany({
        select: {
          id: true,
          name: true,
          generation: true,
          type1: true,
          type2: true,
          weather1: true,
          weather2: true,
          evolutionStage: true,
        },
      });
    } else if (isNaN(limit) && !isNaN(skip)) {
      pokemons = await this.prisma.pokemon.findMany({
        skip: skip,
        select: {
          id: true,
          name: true,
          generation: true,
          type1: true,
          type2: true,
          weather1: true,
          weather2: true,
          evolutionStage: true,
        },
      });
    } else if (!isNaN(limit) && isNaN(skip)) {
      pokemons = await this.prisma.pokemon.findMany({
        take: limit,
        select: {
          id: true,
          name: true,
          generation: true,
          type1: true,
          type2: true,
          weather1: true,
          weather2: true,
          evolutionStage: true,
        },
      });
    } else {
      pokemons = await this.prisma.pokemon.findMany({
        take: limit,
        skip: skip,
        select: {
          id: true,
          name: true,
          generation: true,
          type1: true,
          type2: true,
          weather1: true,
          weather2: true,
          evolutionStage: true,
        },
      });
    }

    return pokemons;
  }

  async getPokemonsByGeneration(
    generation: number,
  ): Promise<PokemonResponse[]> {
    const pokemons = await this.prisma.pokemon.findMany({
      where: { generation: generation },
      select: {
        id: true,
        name: true,
        generation: true,
        type1: true,
        type2: true,
        weather1: true,
        weather2: true,
        evolutionStage: true,
      },
    });
    return pokemons;
  }

  async getPokemonsByStage(stage: string): Promise<PokemonResponse[]> {
    const pokemons = await this.prisma.pokemon.findMany({
      where: { evolutionStage: stage },
      select: {
        id: true,
        name: true,
        generation: true,
        type1: true,
        type2: true,
        weather1: true,
        weather2: true,
        evolutionStage: true,
      },
    });

    return pokemons;
  }

  async getEvolvedPokemons(boolean: string): Promise<PokemonResponse[]> {
    let value!: number;

    if (boolean === 'true') {
      value = 1;
    } else if (boolean === 'false') {
      value = 0;
    }

    const pokemons = await this.prisma.pokemon.findMany({
      where: { evolved: value },
      select: {
        id: true,
        name: true,
        generation: true,
        type1: true,
        type2: true,
        weather1: true,
        weather2: true,
        evolutionStage: true,
      },
    });
    return pokemons;
  }

  async getFamilyPokemons(familyID: number): Promise<PokemonResponse[]> {
    const pokemons = await this.prisma.pokemon.findMany({
      where: { familyID: familyID },
      select: {
        id: true,
        name: true,
        familyID: true,
        generation: true,
        type1: true,
        type2: true,
        weather1: true,
        weather2: true,
        evolutionStage: true,
      },
    });

    return pokemons;
  }

  async getCrossgenPokemons(): Promise<PokemonResponse[]> {
    const pokemons = await this.prisma.pokemon.findMany({
      where: { crossGen: 1 },
      select: {
        id: true,
        name: true,
        generation: true,
        type1: true,
        type2: true,
        weather1: true,
        weather2: true,
        evolutionStage: true,
      },
    });

    return pokemons;
  }

  async getPokemonByType(type: string): Promise<PokemonResponse[]> {
    const pokemons = await this.prisma.pokemon.findMany({
      where: {
        OR: [
          {
            type1: type,
          },
          {
            type2: type,
          },
        ],
      },
      select: {
        id: true,
        name: true,
        generation: true,
        type1: true,
        type2: true,
        weather1: true,
        weather2: true,
        evolutionStage: true,
      },
    });

    return pokemons;
  }

  async getPokemonByMainType(type: string): Promise<PokemonResponse[]> {
    const pokemons = await this.prisma.pokemon.findMany({
      where: {
        type1: type,
      },
      select: {
        id: true,
        name: true,
        generation: true,
        type1: true,
        type2: true,
        weather1: true,
        weather2: true,
        evolutionStage: true,
      },
    });
    return pokemons;
  }

  async getLegendaryPokemons(): Promise<PokemonResponse[]> {
    const pokemons = await this.prisma.pokemon.findMany({
      where: {
        legendary: 1,
      },
      select: {
        id: true,
        name: true,
        generation: true,
        type1: true,
        type2: true,
        weather1: true,
        weather2: true,
        evolutionStage: true,
      },
    });

    return pokemons;
  }
}
