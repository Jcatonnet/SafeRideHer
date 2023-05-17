export type CountryName = string;

export type RawCountry = {
  name: string;
  native: string;
  phone: string;
  continent: string;
  capital: string;
  currency: string;
  languages: string[];
  emoji: string;
  emojiU: string;
};

export type CountriesListRaw = {
  [key: string]: RawCountry;
};

export type Country = {
  label: string;
  value: string;
  emoji: string;
  currency: string;
  phone: string;
};
