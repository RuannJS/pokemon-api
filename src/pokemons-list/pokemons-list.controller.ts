import { Controller, Get, Param } from '@nestjs/common';
import { PokemonsListService } from './pokemons-list.service';
import { PokemonResponse } from './pokemonresponse.interface';

@Controller('pokemons')
export class PokemonsListController {
  constructor(private readonly pokemons: PokemonsListService) {}

  // Get pokemons by generation
  @Get('/generation/:generation')
  async getPokemonsByGeneration(
    @Param('generation') generation: string,
  ): Promise<PokemonResponse[]> {
    return await this.pokemons.getPokemonsByGeneration(Number(generation));
  }

  // Get pokemons by evolution stage
  @Get('/evolution/:stage')
  async getPokemonsByStage(
    @Param('stage') stage: string,
  ): Promise<PokemonResponse[]> {
    return await this.pokemons.getPokemonsByStage(stage);
  }

  // Get max evolution pokemons
  @Get('/evolved/:boolean')
  async getEvolvedPokemons(
    @Param('boolean') boolean: string,
  ): Promise<PokemonResponse[]> {
    return await this.pokemons.getEvolvedPokemons(boolean);
  }

  //  Get pokemons with the same familyID
  @Get('/family/:familyID')
  async getFamilyPokemons(@Param('familyID') familyID: string) {
    return await this.pokemons.getFamilyPokemons(Number(familyID));
  }

  //   Get pokemons with crossed gen evolutions
  @Get('crossgen')
  async getCrossgenPokemons(): Promise<PokemonResponse[]> {
    return await this.pokemons.getCrossgenPokemons();
  }

  // Get Pokemons by type (1 or 2)
  @Get('types/:type')
  async getPokemonByType(
    @Param('type') type: string,
  ): Promise<PokemonResponse[]> {
    return await this.pokemons.getPokemonByType(type);
  }

  //   Get Pokemons by main Type (Type 1)
  @Get('maintype/:type')
  async getPokemonByMainType(
    @Param('type') type: string,
  ): Promise<PokemonResponse[]> {
    return await this.pokemons.getPokemonByMainType(type);
  }

  //   Get Legendary Pokemons

  @Get('legendary')
  async getLegendaryPokemons(): Promise<PokemonResponse[]> {
    return await this.pokemons.getLegendaryPokemons();
  }
}
