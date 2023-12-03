import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Pokemon } from './entity/pokemon.entity';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('seed')
  seedDatabase() {
    return this.appService.seedDatabase();
  }

  @Get()
  listAllPokemons() {
    return this.appService.listAllPokemons();
  }
}
