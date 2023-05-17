import { Box, Tooltip } from "@material-ui/core";
import { Stack } from "@mui/material";
import Bounce from "react-reveal/Bounce";
import { HorizontalLineGray } from "../../../../components/Small Components/HorizontalLineGray";
import { HorizontalLineGreen } from "../../../../components/Small Components/HorizontalLineGreen";
import { listedSports } from "../../../../utils/sportsType";
import { SportsEnum, SportsTypes } from "../../../utils/types";
import "./details.styles.css";

type Props = {
  sportsAvailable: SportsTypes[];
  infoTitle?: string;
  handleClick?: (event: any) => void;
};

export const SportTypesIconMapping: Record<string, string> = {
  Snowboarding: "/images/Snowboarding.png",
  Skiing: "/images/Skiing.png",
  Kitesurfing: "/images/Kitesurfing.png",
  Surfing: "/images/Surfing.png",
  Skateboarding: "/images/Skateboarding.png",
  Climbing: "/images/Climbing.png",
};

export const SportsList: React.FC<Props> = ({
  sportsAvailable,
  infoTitle,
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
      <h2> {infoTitle}</h2>
      <Box className="card__grid">{sportIcon}</Box>
    </Stack>
  );
};
