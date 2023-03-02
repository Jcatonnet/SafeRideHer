import { makeStyles } from "@material-ui/core";
import WomenHandHolding from "../../../assets/WomenHandHolding.jpg";
// import WomenXtrem from "../../../assets/CoverPictureXtremeWoman.png";

export const useStyles = makeStyles(
  ({ breakpoints, spacing, transitions: { create, duration } }) => ({
    layout: {
      minHeight: "100vh",
      height: "100vh",
      display: "grid",
      gridTemplateRows: "auto 1fr",
      gridTemplateColumns: "1fr 1fr",
      /* Overflow is required due to sliding transitions of widgets */
      overflowX: "hidden",
      [breakpoints.down("sm")]: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
      },
    },
    navbar: {
      gridColumn: "1 / span 2",
    },
    leftColumn: {
      position: "relative",
      padding: spacing(2),
      paddingRight: spacing(1),
      backgroundImage: `url(${WomenHandHolding})`,
      backgroundSize: "cover",

      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      transition: create("padding", duration["short"]),
      [breakpoints.down("sm")]: {
        padding: spacing(2),
      },
      [breakpoints.down(breakpoints.values.mobile)]: {
        paddingTop: (isSearchboxVisible) => {
          console.log(isSearchboxVisible);
          return isSearchboxVisible ? spacing(8) : spacing(2);
        },
      },
    },
    rightColumn: {
      height: "100%",
      padding: spacing(5),
      paddingLeft: spacing(4),
      overflowY: "scroll",
      overflowX: "hidden",

      [breakpoints.down("sm")]: {
        padding: spacing(2),
        overflowY: "hidden",
      },
      [breakpoints.only("xs")]: {
        paddingTop: 0,
      },
    },
    footer: {
      gridColumn: "1 / span 2",
    },
  })
);
