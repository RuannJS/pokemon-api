import { Injectable } from '@nestjs/common';
import { PokemonResponse } from '../pokemons-list/pokemonresponse.interface';
import { PrismaService } from '../services/prisma/prisma.service';
import { Pokemon } from 'src/entity/pokemon.entity';

@Injectable()
export class PokemonFilterService {
  constructor(private readonly prisma: PrismaService) {}

  async getPokemonByStats(
    order: string,
    min: number,
    max: number,
  ): Promise<PokemonResponse[]> {
    var pokemons: PokemonResponse[];
    var minStat!: number;
    var maxStat!: number;

    if (isNaN(min)) {
      minStat = 0;
    } else {
      minStat = min;
    }

    if (isNaN(max)) {
      maxStat = 999;
    } else {
      maxStat = max;
    }

    if (order === 'asc') {
      return (pokemons = await this.prisma.pokemon.findMany({
        orderBy: {
          statTotal: 'asc',
        },
        where: {
          AND: [
            {
              statTotal: { gte: minStat },
            },
            {
              statTotal: { lte: maxStat },
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
          statTotal: true,
        },
      }));
    }
    if (order === 'desc') {
      return (pokemons = await this.prisma.pokemon.findMany({
        orderBy: { statTotal: 'desc' },
        where: {
          AND: [
            { statTotal: { gte: minStat } },
            {
              statTotal: { lte: maxStat },
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
          statTotal: true,
        },
      }));
    }
  }

  async getPokemonByAtk(
    order: string,
    min: number,
    max: number,
  ): Promise<PokemonResponse[]> {
    var pokemons: PokemonResponse[];
    var minStat!: number;
    var maxStat!: number;

    if (isNaN(min)) {
      minStat = 0;
    } else {
      minStat = min;
    }

    if (isNaN(max)) {
      maxStat = 999;
    } else {
      maxStat = max;
    }

    if (order === 'asc') {
      return (pokemons = await this.prisma.pokemon.findMany({
        orderBy: {
          atk: 'asc',
        },
        where: {
          AND: [
            {
              atk: { gte: minStat },
            },
            {
              atk: { lte: maxStat },
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
          atk: true,
        },
      }));
    }
    if (order === 'desc') {
      return (pokemons = await this.prisma.pokemon.findMany({
        orderBy: { atk: 'desc' },
        where: {
          AND: [
            { atk: { gte: minStat } },
            {
              atk: { lte: maxStat },
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
          atk: true,
        },
      }));
    }
  }

  async getPokemonByDef(
    order: string,
    min: number,
    max: number,
  ): Promise<PokemonResponse[]> {
    var pokemons: PokemonResponse[];
    var minStat!: number;
    var maxStat!: number;

    if (isNaN(min)) {
      minStat = 0;
    } else {
      minStat = min;
    }

    if (isNaN(max)) {
      maxStat = 999;
    } else {
      maxStat = max;
    }

    if (order === 'asc') {
      return (pokemons = await this.prisma.pokemon.findMany({
        orderBy: {
          def: 'asc',
        },
        where: {
          AND: [
            {
              def: { gte: minStat },
            },
            {
              def: { lte: maxStat },
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
          def: true,
        },
      }));
    }
    if (order === 'desc') {
      return (pokemons = await this.prisma.pokemon.findMany({
        orderBy: { def: 'desc' },
        where: {
          AND: [
            { def: { gte: minStat } },
            {
              def: { lte: maxStat },
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
          def: true,
        },
      }));
    }
  }

  async getPokemonBySta(
    order: string,
    min: number,
    max: number,
  ): Promise<PokemonResponse[]> {
    var pokemons: PokemonResponse[];
    var minStat!: number;
    var maxStat!: number;

    if (isNaN(min)) {
      minStat = 0;
    } else {
      minStat = min;
    }

    if (isNaN(max)) {
      maxStat = 999;
    } else {
      maxStat = max;
    }

    if (order === 'asc') {
      return (pokemons = await this.prisma.pokemon.findMany({
        orderBy: {
          sta: 'asc',
        },
        where: {
          AND: [
            {
              sta: { gte: minStat },
            },
            {
              sta: { lte: maxStat },
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
          sta: true,
        },
      }));
    }
    if (order === 'desc') {
      return (pokemons = await this.prisma.pokemon.findMany({
        orderBy: { sta: 'desc' },
        where: {
          AND: [
            { sta: { gte: minStat } },
            {
              sta: { lte: maxStat },
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
          sta: true,
        },
      }));
    }
  }

  async getPokemonByName(name: string): Promise<PokemonResponse[]> {
    const pokemons = await this.prisma.pokemon.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
    });

    return pokemons;
  }
}
