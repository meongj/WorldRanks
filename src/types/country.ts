export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: Record<string, {official: string; common: string}>;
  };
  cca2: string;
  cca3: string;
  capital?: string[];
  population: number;
  area: number;
  borders?: string[];
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  independent?: boolean;
  unMember: boolean;
  languages?: Record<string, string>;
  currencies?: Record<string, {name: string; symbol: string}>;
  continents: string[];
}

export type SortField = "population" | "name" | "area";

export type Region = "Americas" | "Antarctic" | "Africa" | "Asia" | "Europe" | "Oceania";

export interface CountryFilters {
  search: string;
  sortBy: SortField;
  regions: Region[];
  unMember: boolean;
  independent: boolean;
}
