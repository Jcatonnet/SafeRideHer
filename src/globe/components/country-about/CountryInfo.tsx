import React, { useEffect } from "react";
import { Box, Button } from "@material-ui/core";
import { InfoBox } from "./InfoBox";
import countryData from "../../../countriesData.json";
import { CityCard } from "./CityCard";
import { SportsList } from "./details/SportList";
import { DescriptionBox } from "../../../components/DescriptionBox";
import {
  CityType,
  sportClub,
  SportsEnum,
  SportsTypes,
} from "../../utils/types";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import "./index.styles.css";
import Pulse from "react-reveal/Pulse";
import { NoReferences } from "../NoReferences/NoReferences";

export const CountryInfo = ({ selectedCountry: { name } }: any) => {
  const [citySelected, setCitySelected] = useState<CityType>();
  const [sportsClubToDisplay, setSportsClubToDisplay] = useState<
    sportClub[] | undefined
  >();

  const sortCities = (a: CityType, b: CityType) => {
    if (a.cityName < b.cityName) {
      return -1;
    }
    if (a.cityName > b.cityName) {
      return 1;
    }
    return 0;
  };

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
  const cards = countryCities?.sort(sortCities).map((city) => {
    return (
      <CityCard
        city={city}
        handleClick={() => {
          setCitySelected(city);
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

  const sportsClubs = citySelected
    ? sportsClubToDisplay!.sort(sortSportBy).map((sportClub) => {
        return <DescriptionBox sportClub={sportClub} />;
      })
    : [];

  const skiClubs = sportsClubs.filter((sportsClub) => {
    return sportsClub.props.sportClub.type === SportsEnum.SPORT_SKIING;
  });
  const snowboardClubs = sportsClubs.filter((sportsClub) => {
    return sportsClub.props.sportClub.type === SportsEnum.SPORT_SNOWBOARDING;
  });
  const surfClubs = sportsClubs.filter((sportsClub) => {
    return sportsClub.props.sportClub.type === SportsEnum.SPORT_SURFING;
  });
  const skateboardClubs = sportsClubs.filter((sportsClub) => {
    return sportsClub.props.sportClub.type === SportsEnum.SPORT_SKATEBOARDING;
  });
  const climbingClubs = sportsClubs.filter((sportsClub) => {
    return sportsClub.props.sportClub.type === SportsEnum.SPORT_CLIMBING;
  });
  const kitesurfClubs = sportsClubs.filter((sportsClub) => {
    return sportsClub.props.sportClub.type === SportsEnum.SPORT_KITE_SURFING;
  });

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
            <Button
              variant="outlined"
              color="primary"
              onClick={handleBackClick}
            >
              Back to cities list
            </Button>

            {!!skiClubs.length && (
              <>
                <h2 className="section__title">Skiing </h2>
                <Fade bottom cascade>
                  <div>
                    <div>{skiClubs}</div>
                  </div>
                </Fade>
              </>
            )}

            {!!snowboardClubs.length && (
              <>
                <h2 className="section__title">Snowboarding </h2>
                <Fade bottom cascade>
                  <div>
                    <div>{snowboardClubs}</div>
                  </div>
                </Fade>
              </>
            )}
            {!!surfClubs.length && (
              <>
                <h2 className="section__title">Surfing </h2>
                <Fade bottom cascade>
                  <div>
                    <div>{surfClubs}</div>
                  </div>
                </Fade>
              </>
            )}
            {!!skateboardClubs.length && (
              <>
                <h2 className="section__title">Skateboarding </h2>
                <Fade bottom cascade>
                  <div>
                    <div>{surfClubs}</div>
                  </div>
                </Fade>
              </>
            )}
            {!!climbingClubs.length && (
              <>
                <h2 className="section__title">Climbing </h2>
                <Fade bottom cascade>
                  <div>
                    <div>{climbingClubs}</div>
                  </div>
                </Fade>
              </>
            )}
            {!!kitesurfClubs.length && (
              <>
                <h2 className="section__title">Kite surfing </h2>
                <Fade bottom cascade>
                  <div>
                    <div>{kitesurfClubs}</div>
                  </div>
                </Fade>
              </>
            )}
          </>
        ) : (
          <div>
            <SportsList
              infoTitle="Available extreme sisterhoods in this country:"
              sportsAvailable={sportsinCountry}
            />
            <Pulse cascade>
              <div>
                <div className="card--grid">{cards}</div>
              </div>
            </Pulse>
          </div>
        )}
        {!sportsinCountry.length && <NoReferences />}
      </InfoBox>
    </Box>
  );
};
