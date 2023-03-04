import { Box, Tooltip } from "@material-ui/core";
import { Stack } from "@mui/material";
import Bounce from "react-reveal/Bounce";
import { HorizontalLineGray } from "../../../../components/Small Components/HorizontalLineGray";
import { HorizontalLineGreen } from "../../../../components/Small Components/HorizontalLineGreen";
import {
  CountryCitiesType,
  SportsEnum,
  SportsTypes,
} from "../../../utils/types";
import { NoReferences } from "../../NoReferences/NoReferences";
import "./details.styles.css";

type Props = {
  sportsAvailable: SportsTypes[];
  handleClick?: (event: any) => void;
};

const listedSports: SportsTypes[] = [
  SportsEnum.SPORT_SKIING,
  SportsEnum.SPORT_SNOWBOARDING,
  SportsEnum.SPORT_SURFING,
  SportsEnum.SPORT_SKATEBOARDING,
  SportsEnum.SPORT_CLIMBING,
  SportsEnum.SPORT_KITE_SURFING,
];

export const SportTypesIconMapping: Record<string, string> = {
  Snowboarding: "/images/snowboard.png",
  Skiing: "/images/skier.png",
  "Kite surfing": "/images/kitesurf.png",
  Surfing: "/images/surfer.png",
  Skateboarding: "/images/skater.png",
  Climbing: "/images/climbing-wall.png",
};

export const SportsList: React.FC<Props> = ({
  sportsAvailable,
  handleClick,
}) => {
  const sportIcon = listedSports.map((sport: SportsTypes) => {
    if (sportsAvailable.includes(sport)) {
      return (
        <Box>
          <Bounce>
            <Tooltip title={sport}>
              <img
                onClick={handleClick}
                key={sport}
                data-test={sport}
                className={"img__valid"}
                src={SportTypesIconMapping[sport]}
                width="50"
                border-radius="50%"
                alt="SportIcon"
              />
            </Tooltip>

            <HorizontalLineGreen />
          </Bounce>
        </Box>
      );
    } else {
      return (
        <>
          <Box>
            <Tooltip title={sport}>
              <img
                key={sport}
                className={"img__gray"}
                src={SportTypesIconMapping[sport]}
                width="50"
                border-radius="50%"
                alt="SportIcon"
              />
            </Tooltip>
            <HorizontalLineGray />
          </Box>
        </>
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
