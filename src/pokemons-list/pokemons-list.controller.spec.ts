import { Test, TestingModule } from '@nestjs/testing';
import { PokemonsListController } from './pokemons-list.controller';
import { PokemonsListService } from './pokemons-list.service';
import { PokemonResponse } from './pokemonresponse.interface';

describe('PokemonsListController', () => {
  let controller: PokemonsListController;
  let service: PokemonsListService;

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

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PokemonsListService,
          useValue: {
            getPokemonsByGeneration: jest.fn().mockResolvedValue(mockPokemons),
            getPokemonsByStage: jest.fn().mockResolvedValue(mockPokemons),
            getEvolvedPokemons: jest.fn().mockResolvedValue(mockPokemons),
            getFamilyPokemons: jest.fn().mockResolvedValue(mockPokemons),
            getCrossgenPokemons: jest.fn().mockResolvedValue(mockPokemons),
            getPokemonByType: jest.fn().mockResolvedValue(mockPokemons),
            getPokemonByMainType: jest.fn().mockResolvedValue(mockPokemons),
            getLegendaryPokemons: jest.fn().mockResolvedValue(mockPokemons),
          },
        },
      ],
      controllers: [PokemonsListController],
    }).compile();

    controller = module.get<PokemonsListController>(PokemonsListController);
    service = module.get<PokemonsListService>(PokemonsListService);
  });

  describe('getAllPokemons', () => {
    it('should return an array of pokemons', async () => {
      const pokemons = await controller.getAllPokemons('2', '5');

      expect(pokemons).toEqual(mockPokemons);
    });
  });

  describe('getPokemonByGenaration', () => {
    it('should return an array of pokemons', async () => {
      const pokemons = await controller.getPokemonsByGeneration('2');

      expect(pokemons).toEqual(mockPokemons);
    });
  });

  describe('getPokemonByStage', () => {
    it('should return an array of pokemons', async () => {
      const pokemons = await controller.getPokemonsByStage('1');

      expect(pokemons).toEqual(mockPokemons);
    });
  });

  describe('getEvolvedPokemons', () => {
    it('should return an array of pokemons', async () => {
      const pokemons = await controller.getEvolvedPokemons('true');

      expect(pokemons).toEqual(mockPokemons);
    });
  });

  describe('getFamilyPokemons', () => {
    it('should return an array of pokemons', async () => {
      const pokemons = await controller.getFamilyPokemons('5');

      expect(pokemons).toEqual(mockPokemons);
    });
  });

  describe('getCrossgenPokemons', () => {
    it('should return an array of pokemons', async () => {
      const pokemons = await controller.getCrossgenPokemons();

      expect(pokemons).toEqual(mockPokemons);
    });
  });

  describe('getPokemonByType', () => {
    it('should return an array of pokemons', async () => {
      const pokemons = await controller.getPokemonByType('normal');

      expect(pokemons).toEqual(mockPokemons);
    });
  });

  describe('getPokemonByMainType', () => {
    it('should return an array of pokemons', async () => {
      const pokemons = await controller.getPokemonByMainType('flying');

      expect(pokemons).toEqual(mockPokemons);
    });
  });

  describe('getLegendaryPokemons', () => {
    it('should return an array of pokemons', async () => {
      const pokemons = await controller.getLegendaryPokemons();

      expect(pokemons).toEqual(mockPokemons);
    });
  });
});
