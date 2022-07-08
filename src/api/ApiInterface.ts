import { ApiService } from "./ApiService";
import { Airplain } from "./commonInterface";

export interface TotalApi {
  GetAirplane(): Promise<Airplain | undefined>;
  //GetTrain(): Promise<string | undefined>;
  //GetBus(): Promise<string | undefined>;
}

export const NewInterface = (): TotalApi => {
  return new ApiService();
};
