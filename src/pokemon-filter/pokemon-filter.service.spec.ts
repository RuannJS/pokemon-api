import { Test, TestingModule } from '@nestjs/testing';
import { PokemonFilterService } from './pokemon-filter.service';
import { PrismaService } from '../services/prisma/prisma.service';

import { PokemonResponse } from 'src/pokemons-list/pokemonresponse.interface';

describe('PokemonFilterService', () => {
  let service: PokemonFilterService;
  let prisma: PrismaService;

  const mockPokemons: PokemonResponse[] = [
    {
      id: '656bd544c230ac3764462af8',
      name: 'Articuno',
      generation: 1,
      type1: 'ice',
      type2: 'flying',
      weather1: 'Snow',
      weather2: 'Windy',
      evolutionStage: '1',
    },
    {
      id: '656bd544c230ac3764462af9',
      name: 'Zapdos',
      generation: 1,
      type1: 'electric',
      type2: 'flying',
      weather1: 'Rainy',
      weather2: 'Windy',
      evolutionStage: '1',
    },
    {
      id: '656bd544c230ac3764462afa',
      name: 'Moltres',
      generation: 1,
      type1: 'fire',
      type2: 'flying',
      weather1: 'Sunny/clear',
      weather2: 'Windy',
      evolutionStage: '1',
    },
  ];

  const mockPrisma = {
    pokemon: {
      findMany: jest.fn().mockResolvedValue(mockPokemons),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonFilterService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<PokemonFilterService>(PokemonFilterService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('getPokemonByStats', () => {
    it('should return pokemon array', async () => {
      const pokemons = await service.getPokemonByStats('asc', 200, 300);

      expect(pokemons).toEqual(mockPokemons);
    });
  });

  describe('getPokemonByAtk', () => {
    it('should return pokemon array', async () => {
      const pokemons = await service.getPokemonByAtk('asc', 200, 300);

      expect(pokemons).toEqual(mockPokemons);
    });
  });

  describe('getPokemonByDef', () => {
    it('should return pokemon array', async () => {
      const pokemons = await service.getPokemonByDef('asc', 200, 300);

      expect(pokemons).toEqual(mockPokemons);
    });
  });

  describe('getPokemonBySta', () => {
    it('should return pokemon array', async () => {
      const pokemons = await service.getPokemonBySta('asc', 200, 300);

      expect(pokemons).toEqual(mockPokemons);
    });
  });

  describe('getPokemonByName', () => {
    it('should return pokemon array', async () => {
      const pokemons = await service.getPokemonByName('c');

      expect(pokemons).toEqual(mockPokemons);
    });
  });
});
