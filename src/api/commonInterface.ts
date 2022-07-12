export interface IAirplain {
  airlineNm: string | undefined;
  arrPlandTime: string | undefined;
  depPlandTime: string | undefined;
  vihicleId: string | undefined;
  economyCharge: string | undefined;
}

export interface IForm {
  depAirportId: string;
  arrAirportId: string;
  depPlandTime: string;
}

export interface IAirport {
  airportId: string;
  airportNm: string;
}
