import React from "react";
import { Box } from "@material-ui/core";
import { InfoBox } from "./InfoBox";
import countryData from "../../../countriesData.json";
import { CityCard } from "./CityCard";
import { SportsList } from "./details/SportList";
import "./index.styles.css";

export const CountryInfo = ({ selectedCountry: { name } }) => {
  const countryCities = countryData.reduce((countryCities, city) => {
    if (city.countryName === name) {
      countryCities.push(city);
    }
    return countryCities;
  }, []);

  const cards = countryCities?.map((city) => {
    return <CityCard city={city} />;
  });

  return (
    <Box>
      <h1>{name}</h1>
      <InfoBox>
        <SportsList countryCities={countryCities} />
        <div className="card--grid">{cards}</div>
      </InfoBox>
    </Box>
  );
};
