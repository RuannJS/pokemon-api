import { Test, TestingModule } from '@nestjs/testing';
import { PokemonsListService } from './pokemons-list.service';

describe('PokemonsListService', () => {
  let service: PokemonsListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonsListService],
    }).compile();

    service = module.get<PokemonsListService>(PokemonsListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
