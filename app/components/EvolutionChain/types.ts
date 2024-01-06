export interface EvoChainResT {
  data?: EvoRoot | undefined;
}

export interface EvoRoot {
  baby_trigger_item: any;
  chain: Chain;
  id: number;
}

export interface Chain {
  evolution_details: any[];
  evolves_to: EvolvesTo[] | [];
  is_baby: boolean;
  species: Species3;
}

export interface EvolvesTo {
  evolution_details: EvolutionDetail[];
  evolves_to: EvolvesTo2[];
  is_baby: boolean;
  species: Species2;
}

export interface EvolutionDetail {
  gender: any;
  held_item: any;
  item: any;
  known_move: any;
  known_move_type: any;
  location: any;
  min_affection: any;
  min_beauty: any;
  min_happiness: any;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species: any;
  party_type: any;
  relative_physical_stats: any;
  time_of_day: string;
  trade_species: any;
  trigger: Trigger;
  turn_upside_down: boolean;
}

export interface Trigger {
  name: string;
  url: string;
}

export interface EvolvesTo2 {
  evolution_details: EvolutionDetail2[];
  evolves_to: any[];
  is_baby: boolean;
  species: Species;
}

export interface EvolutionDetail2 {
  gender: any;
  held_item: any;
  item: any;
  known_move: any;
  known_move_type: any;
  location: any;
  min_affection: any;
  min_beauty: any;
  min_happiness: any;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species: any;
  party_type: any;
  relative_physical_stats: any;
  time_of_day: string;
  trade_species: any;
  trigger: Trigger2;
  turn_upside_down: boolean;
}

export interface Trigger2 {
  name: string;
  url: string;
}

export interface Species {
  name: string;
  url: string;
}

export interface Species2 {
  name: string;
  url: string;
}

export interface Species3 {
  name: string;
  url: string;
}

export interface SpeciesResT {
  data?: SpeciesRoot | undefined;
}

export interface SpeciesRoot {
  base_happiness: number;
  capture_rate: number;
  color: Color;
  egg_groups: EggGroup[];
  evolution_chain: EvolutionChain;
  evolves_from_species: any;
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genera[];
  generation: Generation;
  growth_rate: GrowthRate;
  habitat: Habitat;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: PalParkEncounter[];
  pokedex_numbers: PokedexNumber[];
  shape: Shape;
  varieties: Variety[];
}

export interface Color {
  name: string;
  url: string;
}

export interface EggGroup {
  name: string;
  url: string;
}

export interface EvolutionChain {
  url: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
  version: Version;
}

export interface Language {
  name: string;
  url: string;
}

export interface Version {
  name: string;
  url: string;
}

export interface Genera {
  genus: string;
  language: Language2;
}

export interface Language2 {
  name: string;
  url: string;
}

export interface Generation {
  name: string;
  url: string;
}

export interface GrowthRate {
  name: string;
  url: string;
}

export interface Habitat {
  name: string;
  url: string;
}

export interface Name {
  language: Language3;
  name: string;
}

export interface Language3 {
  name: string;
  url: string;
}

export interface PalParkEncounter {
  area: Area;
  base_score: number;
  rate: number;
}

export interface Area {
  name: string;
  url: string;
}

export interface PokedexNumber {
  entry_number: number;
  pokedex: Pokedex;
}

export interface Pokedex {
  name: string;
  url: string;
}

export interface Shape {
  name: string;
  url: string;
}

export interface Variety {
  is_default: boolean;
  pokemon: Pokemon;
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface ChainItemT {
  current: Name;
  next: Name;
}
export interface Name {
  name: string;
}
