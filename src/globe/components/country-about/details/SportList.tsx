import { Box, Tooltip } from "@material-ui/core";
import { Stack } from "@mui/material";
import { HorizontalLineGray } from "../../../../components/Small Components/HorizontalLineGray";
import { HorizontalLineGreen } from "../../../../components/Small Components/HorizontalLineGreen";
import {
  CountryCitiesType,
  SportsEnum,
  SportsTypes,
} from "../../../utils/types";
import "./details.styles.css";

type Props = {
  countryCities: CountryCitiesType;
};

const listedSports: SportsTypes[] = [
  SportsEnum.SPORT_CLIMBING,
  SportsEnum.SPORT_KITE_SURFING,
  SportsEnum.SPORT_SKIING,
  SportsEnum.SPORT_SNOWBOARDING,
  SportsEnum.SPORT_SURFING,
  SportsEnum.SPORT_SKATEBOARDING,
];

export const SportTypesIconMapping: Record<string, string> = {
  Snowboarding: "/images/snowboard.png",
  Skiing: "/images/skier.png",
  "Kite surfing": "/images/kitesurf.png",
  Surfing: "/images/surfer.png",
  Skateboarding: "/images/skater.png",
  Climbing: "/images/climbing-wall.png",
};

export const SportsList: React.FC<Props> = ({ countryCities }) => {
  let sportsinCountry: SportsTypes[] = [];
  countryCities.map((city) => {
    city.sportTypes.map((sport: SportsTypes) => sportsinCountry.push(sport));
    return sportsinCountry;
  });
  const sportIcon = listedSports.map((sport: SportsTypes) => {
    if (sportsinCountry.includes(sport)) {
      return (
        <Box>
          <Tooltip title={sport}>
            <img
              className={"img__valid"}
              src={SportTypesIconMapping[sport]}
              width="50"
              border-radius="50%"
              alt="SportIcon"
            />
          </Tooltip>
          <HorizontalLineGreen />
        </Box>
      );
    } else {
      return (
        <Box>
          <Tooltip title={sport}>
            <img
              className={"img__gray"}
              src={SportTypesIconMapping[sport]}
              width="50"
              border-radius="50%"
              alt="SportIcon"
            />
          </Tooltip>
          <HorizontalLineGray />
        </Box>
      );
    }
  });

  return (
    <Stack>
      <h2>Available extreme sisterhood in this country:</h2>
      <Box className="card__grid">{sportIcon}</Box>
    </Stack>
  );
};
