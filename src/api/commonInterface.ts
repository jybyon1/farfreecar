export interface Airplain {
  resultCode: number | undefined;
  resultMsg: string | undefined;
  airlineNm: string;
  depPlandTime: Date;
  arrPlandTime: Date;
  economyCharge: number;
  depAirportNm: string;
  arrAirportNm: string;
}
