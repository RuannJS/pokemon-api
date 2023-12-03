import { Module } from '@nestjs/common';
import { PokemonsListService } from './pokemons-list.service';
import { PokemonsListController } from './pokemons-list.controller';

@Module({
  providers: [PokemonsListService],
  controllers: [PokemonsListController]
})
export class PokemonsListModule {}
