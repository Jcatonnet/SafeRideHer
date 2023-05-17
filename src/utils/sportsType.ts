import { string } from "joi";
import { SportsEnum, SportsTypes } from "../globe/utils/types";

export const listedSports: SportsTypes[] = [
  SportsEnum.SPORT_SKIING,
  SportsEnum.SPORT_SNOWBOARDING,
  SportsEnum.SPORT_SURFING,
  SportsEnum.SPORT_SKATEBOARDING,
  SportsEnum.SPORT_CLIMBING,
  SportsEnum.SPORT_KITE_SURFING,
];

export const sportsTypesWthIcon: any[] = [
  {
    label: SportsEnum.SPORT_SKIING,
    value: SportsEnum.SPORT_SKIING,
    icon: "/images/Skiing.png",
  },
  {
    label: SportsEnum.SPORT_SNOWBOARDING,
    value: SportsEnum.SPORT_SNOWBOARDING,
    icon: "/images/Snowboarding.png",
  },
  {
    label: SportsEnum.SPORT_SURFING,
    value: SportsEnum.SPORT_SURFING,
    icon: "/images/Surfing.png",
  },
  {
    label: SportsEnum.SPORT_SKATEBOARDING,
    value: SportsEnum.SPORT_SKATEBOARDING,
    icon: "/images/Skateboarding.png",
  },
  {
    label: SportsEnum.SPORT_CLIMBING,
    value: SportsEnum.SPORT_CLIMBING,
    icon: "/images/Climbing.png",
  },
  {
    label: SportsEnum.SPORT_KITE_SURFING,
    value: SportsEnum.SPORT_KITE_SURFING,
    icon: "/images/Kitesurfing.png",
  },
];
