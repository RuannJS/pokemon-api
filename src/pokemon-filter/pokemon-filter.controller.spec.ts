import { Test, TestingModule } from '@nestjs/testing';
import { PokemonFilterController } from './pokemon-filter.controller';

describe('PokemonFilterController', () => {
  let controller: PokemonFilterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonFilterController],
    }).compile();

    controller = module.get<PokemonFilterController>(PokemonFilterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
