export interface IConstructor {
  name: string;
}

export interface IDriver {
  driverId: string;
  permanentNumber: string;
  url: string;
  givenName: string;
  familyName: string;
}

export interface IRacesResult {
  number: string;
  Driver: IDriver;
  Constructor: IConstructor;
}
export interface IRaces {
  raceName: string;
  Results: IRacesResult;
}

export interface IRacesTable {
  season: string;
  position: string;
  Races: IRaces;
}
export interface IRaces {
  series: string;
  total: string;
  RaceTable: IRacesTable;
}

export interface ICompilationResult {
  MRData?: IRaces[];
}
