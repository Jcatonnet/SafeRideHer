import React from "react";

import { Details } from "./details";
import { InfoBox } from "./InfoBox";
import { WikiEntry } from "./wiki-entry";
import countryData from "../../../countriesData.json";
import { CityCard } from "./CityCard";
import "./index.styles.css";

export const CountryAbout = ({ selectedCountry: { name, alpha } }) => {
  const data = countryData.map((country) => {
    if (country.countryName === name) return country;
    return data;
  });
  const cards = data?.map((item) => {
    console.log("item", item);
    return <CityCard item={item} />;
  });

  return (
    <>
      <InfoBox>
        <WikiEntry term={name} />
        <Details alpha={alpha} />
        <div className="card--grid">{cards}</div>
      </InfoBox>
    </>
  );
};
