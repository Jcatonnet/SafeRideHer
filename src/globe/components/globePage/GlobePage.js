import React, { useCallback, useState } from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

import { Layout } from "../layout";
import { Globe } from "../globe";
import { CountryInfo } from "../country-about/CountryInfo";
import { SearchBox } from "../search-box";
import { useGlobeSize } from "../layout/hooks";
import { useTheme } from "./useTheme";
import { getCountryById, getRandomCountry } from "../../utils";
import { LandingPage } from "../LandingPage/LandingPage";
import { SubmissionModal } from "../../../components/Small Components/Modal";
import { Typography } from "@mui/material";

export const GlobePage = () => {
  const [theme, toggleTheme] = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  const [globeWidth, globeHeight] = useGlobeSize();

  /**
   * Show/hide widgets
   */
  const [showWidgets, setShowWidgets] = useState(true);
  const toggleWidgetsVisibility = useCallback(() => {
    preventRotation();
    setShowWidgets((prev) => !prev);
  }, []);

  /**
   * Selected country and rotation
   *
   * When updating the country it is necessary to update the rotation
   * as well.
   *
   */
  const initialState = getRandomCountry();

  const [selectedCountry, setSelectedCountry] = useState("");
  const [rotation, setRotation] = useState(initialState.rotation);

  /**
   * The globe is watching rotation property and updates its rotation when it changes.
   * When rotation is set to null, the globe won't update the rotation.
   */
  function preventRotation() {
    setRotation([2.430943316945423, -44.87701792097157, 0]);
  }

  const updateSelectedCountry = useCallback((newCountry) => {
    setSelectedCountry(newCountry);
    setRotation(newCountry.rotation);
  }, []);

  const setRandomCountry = useCallback(() => {
    updateSelectedCountry(getRandomCountry());
  }, [updateSelectedCountry]);

  /**
   * Event handlers
   *
   */
  const handleCountryClick = ({ target: { id } }) => {
    updateSelectedCountry(getCountryById(id));
  };

  const handleCountrySelect = (event, newCountry) => {
    if (newCountry) updateSelectedCountry(newCountry);
  };

  const handleRandomCountryClick = () => {
    setRandomCountry();
  };

  const handleLocationClick = (countryId, rotation) => {
    setSelectedCountry(getCountryById(countryId));
    setRotation(rotation);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout
        isSearchboxVisible={showWidgets}
        // navbar={
        //   <Navbar
        //   title="Find your next safe Xtrem adventure !"
        //   onThemeIconClick={handleToggleTheme}
        // />

        // }
        leftColumn={
          <>
            <SearchBox
              show={showWidgets}
              onOptionSelect={handleCountrySelect}
            />
            <Globe
              rotation={rotation}
              rotationBy={rotation}
              initialRotation={initialState.rotation}
              width={globeWidth}
              height={globeHeight}
              selectedCountry={selectedCountry}
              onCountryClick={handleCountryClick}
              onLocationClick={handleLocationClick}
              onRandomCountryClick={handleRandomCountryClick}
            />
          </>
        }
        rightColumn={
          <>
            <SubmissionModal open={modalOpen} />
            {selectedCountry ? (
              <>
                <CountryInfo selectedCountry={selectedCountry} />
              </>
            ) : (
              <LandingPage />
            )}
          </>
        }
      />
    </ThemeProvider>
  );
};
