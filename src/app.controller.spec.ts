import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Pokemon } from './entity/pokemon.entity';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  const mockText = 'Database was successfully seeded!';

  const mockPokemons: Pokemon[] = [
    {
      name: 'Mocked',
      pokedexNumber: 0,
      generation: 0,
      evolved: 0,
      crossGen: 0,
      aquireable: 0,
      atk: 100,
      def: 100,
      cpAt39: 100,
      cpAt40: 100,
      evolutionStage: '0',
      familyID: 0,
      futureEvolve: 0,
      hatchable: 0,
      imgName: '0',
      legendary: 0,
      nest: 0,
      new: 0,
      notGettable: 0,
      regional: 0,
      shiny: 0,
      spawns: 0,
      sta: 100,
      statTotal: 100,
      type1: 'mocked',
      type2: 'mocked',
      weather1: 'mocked',
      weather2: 'mocked',
    },
    {
      name: 'Mocked2',
      pokedexNumber: 0,
      generation: 0,
      evolved: 0,
      crossGen: 0,
      aquireable: 0,
      atk: 100,
      def: 100,
      cpAt39: 100,
      cpAt40: 100,
      evolutionStage: '0',
      familyID: 0,
      futureEvolve: 0,
      hatchable: 0,
      imgName: '0',
      legendary: 0,
      nest: 0,
      new: 0,
      notGettable: 0,
      regional: 0,
      shiny: 0,
      spawns: 0,
      sta: 100,
      statTotal: 100,
      type1: 'mocked2',
      type2: 'mocked2',
      weather1: 'mocked2',
      weather2: 'mocked2',
    },
  ];

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            validatePokemons: jest.fn().mockReturnValue(mockPokemons),
            seedDatabase: jest.fn().mockResolvedValue(mockText),
          },
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('seedDatabase', () => {
    it('should return a successfully seeded the database message', async () => {
      const text = await appController.seedDatabase();

      expect(text).toBe(mockText);
    });
  });
});
