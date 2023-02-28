import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  Tooltip,
} from "@material-ui/core";
import {
  PublicOutlined as GlobeIcon,
  Brightness4 as MoonIcon,
  Brightness7 as SunIcon,
  GitHub as GitHubIcon,
  Widgets as WidgetsIcon,
  Keyboard as KeyboardIcon,
} from "@material-ui/icons";
import { useTheme, useMediaQuery } from "@material-ui/core";
import clsx from "clsx";
import CoverPictureXtremeWoman from "../../../src/assets/CoverPictureXtremeWoman.png";

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  root: {
    color: palette.text.primary,
    backgroundColor: palette.background.default,
  },
  toolbar: {},
  title: {
    left: 0,
    position: "absolute",
    width: "100%",
    textAlign: "center",
    [breakpoints.only("xs")]: {
      position: "static",
      textAlign: "left",
    },
  },
  pushToRight: {
    marginLeft: "auto",
  },
}));

const useNavbarIconStyles = makeStyles({
  root: {},
  pushToRight: {
    marginLeft: "auto",
  },
});

const NavbarButton = ({ label, pushToRight, ...other }) => {
  const classes = useNavbarIconStyles();

  return (
    <Tooltip title={label}>
      <IconButton
        className={clsx({
          [classes.pushToRight]: pushToRight,
        })}
        edge="end"
        color="inherit"
        aria-label={label}
        {...other}
      />
    </Tooltip>
  );
};

export const Navbar = ({ title, onThemeIconClick, onShortcutsIconClick }) => {
  const classes = useStyles();
  const {
    palette: { type },
    breakpoints,
  } = useTheme();

  // Media queries
  const matchesUpSm = useMediaQuery(breakpoints.up("sm"));
  const matchesDownSmall = useMediaQuery(breakpoints.down("xs"));
  const matchesDownMobile = useMediaQuery(
    `(max-width:${breakpoints.values.mobile}px)`
  );

  let titleVariant = "h4";
  if (matchesDownSmall) titleVariant = "h5";
  if (matchesDownMobile) titleVariant = "h6";

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.toolbar}>
        {matchesUpSm && (
          <img
            src={CoverPictureXtremeWoman}
            width="60px"
            border-radius="50%"
            alt="Logo"
            style={{ borderRadius: "50%" }}
          />
        )}
        <Typography className={classes.title} variant={titleVariant}>
          {title}
        </Typography>
        <NavbarButton
          label="Show/hide shortcuts"
          onClick={onShortcutsIconClick}
          pushToRight
        >
          <KeyboardIcon />
        </NavbarButton>
        <NavbarButton
          label="Toggle light/dark theme"
          onClick={onThemeIconClick}
        >
          {type === "light" ? <MoonIcon /> : <SunIcon />}
        </NavbarButton>
      </Toolbar>
    </AppBar>
  );
};
