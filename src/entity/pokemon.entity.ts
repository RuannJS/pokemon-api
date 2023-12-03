export class Pokemon {
  name: string;
  pokedexNumber: number;
  imgName: string;
  generation: number;
  evolutionStage: string;
  evolved: number;
  familyID: number;
  crossGen: number;
  type1: string;
  type2: string;
  weather1: string;
  weather2: string;
  statTotal: number;
  atk: number;
  def: number;
  sta: number;
  legendary: number;
  aquireable: number;
  notGettable: number;
  spawns: number;
  regional: number;
  hatchable: number;
  shiny: number;
  nest: number;
  new: number;
  futureEvolve: number;
  cpAt40: number;
  cpAt39: number;

  constructor(data: Pokemon) {
    this.name = data.name;
    this.pokedexNumber = data.pokedexNumber;
    this.generation = data.generation;
    this.evolved = data.evolved;
    this.crossGen = data.crossGen;
    this.type1 = data.type1;
    this.weather1 = data.weather1;
    this.statTotal = data.statTotal;
    this.atk = data.atk;
    this.def = data.def;
    this.sta = data.sta;
    this.legendary = data.legendary;
    this.aquireable = data.aquireable;
    this.notGettable = data.notGettable;
    this.spawns = data.spawns;
    this.regional = data.regional;
    this.hatchable = data.hatchable;
    this.shiny = data.shiny;
    this.nest = data.nest;
    this.new = data.new;
    this.futureEvolve = data.futureEvolve;
    this.cpAt39 = data.cpAt39;
    this.cpAt40 = data.cpAt40;

    this.familyID = data.familyID;

    this.type2 = data.type2;

    this.weather2 = data.weather2;

    this.evolutionStage = data.evolutionStage;

    this.imgName = data.imgName;
  }
}
