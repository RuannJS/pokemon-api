import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('seed')
  seedDatabase() {
    return this.appService.seedDatabase();
  }
}
