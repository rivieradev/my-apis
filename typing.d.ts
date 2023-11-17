export interface IPersonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: IPerson[];
};

export interface IPerson {
    name: string;
    height: string; 
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string; 
    gender: string; 
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
};

export interface IPlanet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
  };
  
  export interface IPlanetListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: IPlanet[];
  };  


export interface IStarship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: Film[];
  created: string;
  edited: string;
  url: string;
}

export interface IStarshipListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IStarship[];
}

export interface IFilmListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IFilm[];
};

export interface IFilm {
  title: string;
  episode_id: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};

export interface IVehicle {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface IVehicleListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IVehicle[];
}