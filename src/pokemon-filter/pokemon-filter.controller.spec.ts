import { Test, TestingModule } from '@nestjs/testing';
import { PokemonFilterController } from './pokemon-filter.controller';
import { PokemonFilterService } from './pokemon-filter.service';
import { PokemonResponse } from '../pokemons-list/pokemonresponse.interface';

describe('PokemonFilterController', () => {
  let controller: PokemonFilterController;
  let service: PokemonFilterService;

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
          provide: PokemonFilterService,
          useValue: {
            getPokemonByStats: jest.fn().mockResolvedValue(mockPokemons),
            getPokemonByAtk: jest.fn().mockResolvedValue(mockPokemons),
            getPokemonByDef: jest.fn().mockResolvedValue(mockPokemons),
            getPokemonBySta: jest.fn().mockResolvedValue(mockPokemons),
            getPokemonByName: jest.fn().mockResolvedValue(mockPokemons),
          },
        },
      ],
      controllers: [PokemonFilterController],
    }).compile();

    controller = module.get<PokemonFilterController>(PokemonFilterController);
    service = module.get<PokemonFilterService>(PokemonFilterService);
  });

  describe('getPokemonByStats', () => {
    it('should return pokemon array', async () => {
      const pokemon = await controller.getPokemonByStats('asc', '600', '900');

      expect(pokemon).toEqual(mockPokemons);
    });
  });

  describe('getPokemonByAtk', () => {
    it('should return pokemon array', async () => {
      const pokemon = await controller.getPokemonByAtk('desc', '200', '300');

      expect(pokemon).toEqual(mockPokemons);
    });
  });

  describe('getPokemonByDef', () => {
    it('should return pokemon array', async () => {
      const pokemon = await controller.getPokemonByDef('asc', '200', '300');

      expect(pokemon).toEqual(mockPokemons);
    });
  });

  describe('getPokemonBySta', () => {
    it('should return pokemon array', async () => {
      const pokemon = await controller.getPokemonBySta('asc', '200', '300');

      expect(pokemon).toEqual(mockPokemons);
    });
  });

  describe('getPokemonByName', () => {
    it('should return pokemon array', async () => {
      const pokemon = await controller.getPokemonByName('star');

      expect(pokemon).toEqual(mockPokemons);
    });
  });
});
