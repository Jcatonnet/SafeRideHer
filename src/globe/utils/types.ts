export type CityType = {
  countryName: string;
  cityName: string;
  sportType: SportsEnum[];
  image: string;
};

export type CountryCitiesType = CityType[];

export type SportsTypes =
  | "Snowboarding"
  | "Skiing"
  | "Kite surfing"
  | "Surfing"
  | "Skateboarding"
  | "Climbing";

export enum SportsEnum {
  SPORT_SNOWBOARDING = "Snowboarding",
  SPORT_SKIING = "Skiing",
  SPORT_KITE_SURFING = "Kite surfing",
  SPORT_Skateboarding = "Skateboarding",
  SPORT_Climbing = "Climbing",
}
