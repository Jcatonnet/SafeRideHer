export type CityType = {
  countryName: string;
  cityName: string;
  sportTypes: SportsTypes[];
  image: string;
  sportsClub: sportClub[];
};

export type CountryCitiesType = CityType[];

export type sportClub = {
  clubName: string;
  description: string;
  phoneNumber: string;
  email: string;
  facebook: string;
  logo: string;
  type: SportsTypes;
};

export type SportsTypes =
  | SportsEnum.SPORT_CLIMBING
  | SportsEnum.SPORT_KITE_SURFING
  | SportsEnum.SPORT_SKIING
  | SportsEnum.SPORT_SNOWBOARDING
  | SportsEnum.SPORT_SURFING
  | SportsEnum.SPORT_SKATEBOARDING;

export enum SportsEnum {
  SPORT_SNOWBOARDING = "Snowboarding",
  SPORT_SKIING = "Skiing",
  SPORT_KITE_SURFING = "Kite surfing",
  SPORT_SKATEBOARDING = "Skateboarding",
  SPORT_CLIMBING = "Climbing",
  SPORT_SURFING = "Surfing",
}
