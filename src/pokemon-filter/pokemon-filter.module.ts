import { Module } from '@nestjs/common';
import { PokemonFilterController } from './pokemon-filter.controller';
import { PokemonFilterService } from './pokemon-filter.service';

@Module({
  controllers: [PokemonFilterController],
  providers: [PokemonFilterService]
})
export class PokemonFilterModule {}
