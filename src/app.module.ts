import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataService } from './services/parseData/parsedata.service';
import { PrismaModule } from './services/prisma/prisma.module';
import { PokemonsListModule } from './pokemons-list/pokemons-list.module';
import { PokemonFilterModule } from './pokemon-filter/pokemon-filter.module';

@Module({
  imports: [PrismaModule, PokemonsListModule, PokemonFilterModule],
  controllers: [AppController],
  providers: [AppService, DataService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly parseService: DataService) {}

  onModuleInit() {
    this.parseService.parsePokemons();
  }
}
