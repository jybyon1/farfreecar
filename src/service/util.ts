export default class Utils {
  public static printairportNm(name: string) {
    switch (name) {
      case "NAARKJB":
        return "MWX";
      case "NAARKJJ":
        return "KWJ";
      case "NAARKJK":
        return "KUV";
      case "NAARKJY":
        return "RSU";
      case "NAARKNW":
        return "WJU";
      case "NAARKNY":
        return "YNY";
      case "NAARKPC":
        return "CJU";
      //김해?
      case "NAARKPK":
        return "KIH";
      case "NAARKPS":
        return "HIN";
      case "NAARKPU":
        return "USN";
      case "NAARKSI":
        return "ICN";
      case "NAARKSS":
        return "GMP";
      case "NAARKTH":
        return "KPO";
      case "NAARKTN":
        return "TAE";
      case "NAARKTU":
        return "CJJ";
      default:
        return "기타";
    }
  }
}
