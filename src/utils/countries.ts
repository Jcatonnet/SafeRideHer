import { countries as rawCountries, Country } from "countries-list";
import { CountriesListRaw } from "../commons/types/countries";

export const formatCountries = (countriesList: CountriesListRaw) => {
  const countriesKeys = Object.keys(countriesList);

  return countriesKeys.reduce((acc: any, countryKey: string) => {
    const currentCountry = countriesList[countryKey];

    return [
      ...acc,
      {
        label: currentCountry.name,
        value: countryKey,
        emoji: currentCountry.emoji,
        currency: currentCountry.currency,
        phone: currentCountry.phone,
      },
    ];
  }, []);
};

const countries = formatCountries(rawCountries);

export default countries;
