import { Test, TestingModule } from '@nestjs/testing';
import { PokemonsListService } from './pokemons-list.service';
import { PrismaService } from '../services/prisma/prisma.service';
import { PokemonResponse } from './pokemonresponse.interface';

describe('PokemonsListService', () => {
  let service: PokemonsListService;
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
        PokemonsListService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<PokemonsListService>(PokemonsListService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('getAllPokemons', () => {
    it('should return pokemons array', async () => {
      const pokemons = await service.getAllPokemons(2, 5);
      expect(pokemons).toEqual(mockPokemons);
    });
  });

  describe('getPokemonsByGeneration', () => {
    it('should return pokemons array', async () => {
      const pokemons = await service.getPokemonsByGeneration(2);
      expect(pokemons).toEqual(mockPokemons);
    });
  });

  describe('getPokemonsByStage', () => {
    it('should return pokemons array', async () => {
      const pokemons = await service.getPokemonsByStage('2');
      expect(pokemons).toEqual(mockPokemons);
    });
  });

  describe('getFamilyPokemons', () => {
    it('should return pokemons array', async () => {
      const pokemons = await service.getFamilyPokemons(2);
      expect(pokemons).toEqual(mockPokemons);
    });
  });

  describe('getEvolvedPokemons', () => {
    it('should return pokemons array', async () => {
      const pokemons = await service.getEvolvedPokemons('true');
      expect(pokemons).toEqual(mockPokemons);
    });
  });

  describe('getCrossgenPokemons', () => {
    it('should return pokemons array', async () => {
      const pokemons = await service.getCrossgenPokemons();
      expect(pokemons).toEqual(mockPokemons);
    });
  });

  describe('getLegendaryPokemons', () => {
    it('should return pokemons array', async () => {
      const pokemons = await service.getLegendaryPokemons();
      expect(pokemons).toEqual(mockPokemons);
    });
  });

  describe('getPokemonByMainType', () => {
    it('should return pokemons array', async () => {
      const pokemons = await service.getPokemonByMainType('flying');
      expect(pokemons).toEqual(mockPokemons);
    });
  });

  describe('getPokemonByType', () => {
    it('should return pokemons array', async () => {
      const pokemons = await service.getPokemonByType('normal');
      expect(pokemons).toEqual(mockPokemons);
    });
  });
});
