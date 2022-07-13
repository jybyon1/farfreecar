import { ApiService } from "./ApiService";
import { IAirplain, IForm } from "./commonInterface";

export interface TotalApi {
  GetAirportId<T>(): Promise<T[] | undefined>;
  GetAirplane(form: IForm): Promise<IAirplain | undefined>;
  //GetTrain(): Promise<string | undefined>;
  //GetBus(): Promise<string | undefined>;
}

export const NewInterface = (): TotalApi => {
  return new ApiService();
};
