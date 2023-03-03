import React from "react";
import { Box, Button } from "@material-ui/core";
import { InfoBox } from "./InfoBox";
import countryData from "../../../countriesData.json";
import { CityCard } from "./CityCard";
import { SportsList } from "./details/SportList";
import { DescriptionBox } from "../../../components/DescriptionBox";
import { CityType } from "../../utils/types";
import { useState } from "react";
import "./index.styles.css";

export const CountryInfo = ({ selectedCountry: { name } }: any) => {
  const [citySelected, setCitySelected] = useState<CityType>();

  const countryCities = countryData.reduce(
    (countryCities: CityType[], city) => {
      if (city.countryName === name) {
        countryCities.push(city as CityType);
      }
      return countryCities;
    },
    []
  );

  const cards = countryCities?.map((city) => {
    return <CityCard city={city} handleClick={() => setCitySelected(city)} />;
  });

  const sportsClub = citySelected?.sportsClub?.map((sportClub) => {
    return <DescriptionBox sportClub={sportClub} />;
  });

  const handleBackClick = () => setCitySelected(undefined);

  console.log("customLog", sportsClub);

  return (
    <Box>
      <h1>{name}</h1>
      <InfoBox>
        <SportsList countryCities={countryCities} />
        {citySelected ? (
          <>
            <Button variant="contained" onClick={handleBackClick}>
              Back to cities list
            </Button>
            <div>{sportsClub}</div>
          </>
        ) : (
          <div className="card--grid">{cards}</div>
        )}
      </InfoBox>
    </Box>
  );
};
