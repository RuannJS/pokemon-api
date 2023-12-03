import { Controller, Get, Param, Query } from '@nestjs/common';
import { PokemonFilterService } from './pokemon-filter.service';
import { PokemonResponse } from '../pokemons-list/pokemonresponse.interface';

@Controller('pokemon')
export class PokemonFilterController {
  constructor(private readonly pokemons: PokemonFilterService) {}

  //   Get Pokemons by total stats
  //   Order must be desc or asc
  @Get('stats/:order')
  async getPokemonByStats(
    @Param('order') order: string,
    @Query('min') min: string,
    @Query('max') max: string,
  ): Promise<PokemonResponse[]> {
    return await this.pokemons.getPokemonByStats(
      order,
      Number(min),
      Number(max),
    );
  }

  //   Get Pokemons by  atk
  //   Order must be desc or asc
  @Get('atk/:order')
  async getPokemonByAtk(
    @Param('order') order: string,
    @Query('min') min: string,
    @Query('max') max: string,
  ): Promise<PokemonResponse[]> {
    return await this.pokemons.getPokemonByAtk(order, Number(min), Number(max));
  }

  //   Get Pokemons by def
  //   Order must be desc or asc
  @Get('def/:order')
  async getPokemonByDef(
    @Param('order') order: string,
    @Query('min') min: string,
    @Query('max') max: string,
  ): Promise<PokemonResponse[]> {
    return await this.pokemons.getPokemonByDef(order, Number(min), Number(max));
  }

  //   Get Pokemons by sta
  //   Order must be desc or asc
  @Get('sta/:order')
  async getPokemonBySta(
    @Param('order') order: string,
    @Query('min') min: string,
    @Query('max') max: string,
  ): Promise<PokemonResponse[]> {
    return await this.pokemons.getPokemonBySta(order, Number(min), Number(max));
  }

  // Get Pokemon by Name
  @Get('name/:name')
  async getPokemonByName(
    @Param('name') name: string,
  ): Promise<PokemonResponse[]> {
    return await this.pokemons.getPokemonByName(name);
  }
}
