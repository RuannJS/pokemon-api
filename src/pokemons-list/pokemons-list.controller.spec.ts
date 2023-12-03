import { Test, TestingModule } from '@nestjs/testing';
import { PokemonsListController } from './pokemons-list.controller';

describe('PokemonsListController', () => {
  let controller: PokemonsListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonsListController],
    }).compile();

    controller = module.get<PokemonsListController>(PokemonsListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
