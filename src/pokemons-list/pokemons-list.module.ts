import { Module } from '@nestjs/common';
import { PokemonsListService } from './pokemons-list.service';
import { PokemonsListController } from './pokemons-list.controller';
import { PrismaModule } from 'src/services/prisma/prisma.module';

@Module({
  providers: [PokemonsListService],
  controllers: [PokemonsListController],
  imports: [PrismaModule],
})
export class PokemonsListModule {}
