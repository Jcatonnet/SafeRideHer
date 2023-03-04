import React, { useEffect } from "react";
import { Box, Button } from "@material-ui/core";
import { InfoBox } from "./InfoBox";
import countryData from "../../../countriesData.json";
import { CityCard } from "./CityCard";
import { SportsList } from "./details/SportList";
import { DescriptionBox } from "../../../components/DescriptionBox";
import { CityType, sportClub, SportsTypes } from "../../utils/types";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import "./index.styles.css";
import Pulse from "react-reveal/Pulse";

export const CountryInfo = ({ selectedCountry: { name } }: any) => {
  const [citySelected, setCitySelected] = useState<CityType>();
  const [sportsClubToDisplay, setSportsClubToDisplay] = useState<
    sportClub[] | undefined
  >();

  const countryCities = countryData.reduce(
    (countryCities: CityType[], city) => {
      if (city.countryName === name) {
        countryCities.push(city as CityType);
      }
      return countryCities;
    },
    []
  );
  useEffect(() => {
    // Update the document title using the browser API
    if (name !== citySelected?.countryName) setCitySelected(undefined);
  });
  const cards = countryCities?.map((city) => {
    return (
      <CityCard
        city={city}
        handleClick={() => {
          setCitySelected(city);
          console.log("city", city);
          setSportsClubToDisplay(city!.sportsClub);
        }}
      />
    );
  });

  let sportsinCountry: SportsTypes[] = [];
  countryCities.map((city) => {
    city.sportTypes.map((sport: SportsTypes) => sportsinCountry.push(sport));
    return sportsinCountry;
  });
  const sportsInCity = citySelected?.sportTypes;

  const sortSportBy = (a: sportClub, b: sportClub) => {
    if (a.type < b.type) {
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
    return 0;
  };

  console.log("sorting", sportsClubToDisplay?.sort(sortSportBy));

  const sportsClub = citySelected
    ? sportsClubToDisplay!.sort(sortSportBy).map((sportClub) => {
        return <DescriptionBox sportClub={sportClub} />;
      })
    : [];

  const handleBackClick = () => setCitySelected(undefined);
  const handleFilter = (event: any) => {
    setSportsClubToDisplay(
      citySelected?.sportsClub.filter(
        (sportClub) => sportClub.type === event.target.dataset.test
      )
    );
  };
  return (
    <Box>
      <h1>
        {name}, {citySelected?.cityName}
      </h1>
      <InfoBox>
        {citySelected ? (
          <>
            <SportsList
              sportsAvailable={sportsInCity!}
              handleClick={(event) => handleFilter(event)}
            />
            <Button variant="contained" onClick={handleBackClick}>
              Back to cities list
            </Button>
            <Fade bottom cascade>
              <div>
                <div>{sportsClub}</div>
              </div>
            </Fade>
          </>
        ) : (
          <>
            <SportsList sportsAvailable={sportsinCountry} />
            <Pulse cascade>
              <div>
                <div className="card--grid">{cards}</div>
              </div>
            </Pulse>
          </>
        )}
      </InfoBox>
    </Box>
  );
};
