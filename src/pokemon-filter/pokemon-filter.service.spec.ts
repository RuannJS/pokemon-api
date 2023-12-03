import { Test, TestingModule } from '@nestjs/testing';
import { PokemonFilterService } from './pokemon-filter.service';

describe('PokemonFilterService', () => {
  let service: PokemonFilterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonFilterService],
    }).compile();

    service = module.get<PokemonFilterService>(PokemonFilterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
