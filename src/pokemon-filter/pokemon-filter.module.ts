import { Module } from '@nestjs/common';
import { PokemonFilterController } from './pokemon-filter.controller';
import { PokemonFilterService } from './pokemon-filter.service';
import { PrismaModule } from 'src/services/prisma/prisma.module';

@Module({
  controllers: [PokemonFilterController],
  providers: [PokemonFilterService],
  imports: [PrismaModule],
})
export class PokemonFilterModule {}
