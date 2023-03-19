export interface pokemon {
    count: number,
    next: null,
    previous: null,
    result: AllPokemon[],
}

export interface AllPokemon {
    name: string | null,
    url: string, 
    front_default: string,
} 

export interface Pokemon {
    id: string,
    name: string,
    pic: string
}

export interface Information {
    effect_changes: [],
    effect_entries: AllInformation[];
}

export interface AllInformation {
    effect: string,
    weight: number | null
}