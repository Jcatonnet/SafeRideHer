import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(
  ({
    palette: { primary, background, getContrastText },
    transitions: { create, duration },
    shadows,
    shape,
  }) => ({
    container: {
      position: "relative",
      height: "100%",
    },
    svg: {
      display: "block",
      margin: "0 auto",
      height: "100%",
    },
    country: {
      fill: background.default,
      stroke: getContrastText(background.default),
      transition: create("fill", duration.standard),
      strokeWidth: 0.25,
      "&:hover": {
        fill: "#c036d8",
      },
    },
    selected: {
      fill: "#c036d8",
    },
    circle: {
      fill: "#8ca1d8",
      transition: create("fill", duration.standard),
    },
  })
);
