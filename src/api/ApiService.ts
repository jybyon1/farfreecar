import { TotalApi } from "./ApiInterface";
import axios, { AxiosRequestConfig } from "axios";
import { Airplain } from "./commonInterface";

export class ApiService implements TotalApi {
  //constructor() {}

  private static async executeRequest(
    path: string,
    config?: AxiosRequestConfig
    
  ): Promise<Record<string, unknown>> {
    try {
      const result = await axios(path, config);
      return result as object as Record<string, unknown>;
    } catch (err) {
      const anyResult = err as Record<string, unknown>;
      if (anyResult && anyResult.response) {
        return anyResult.response as object as Record<string, unknown>;
      }
    }

    return {};
  }

  async GetAirplane(): Promise<Airplain | undefined> {
    const key: string =
      "rVYQ1JhwygEEy01jEYcluaNuNLgooHPLUqaIlyvpJsQmWpmzBXHAI1BeioYDRetfdX92AZoxdk9PqTeuP7A9Xg%3D%3D";
    const response = await axios.get(
      "http://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=" +
        key
    );
    console.log("GetAirplane", response);
    if (response && response.status === 200 && response.data) {
      return response.data as Airplain;
    }
    return undefined;
  }
}
