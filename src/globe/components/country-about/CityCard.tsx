import "./CityCard.styles.css";

export type countryInfoType = {
  countryName: string;
  city: string;
  sportType: string;
  image: string;
};

type Props = {
  item: countryInfoType;
};

export const CityCard: React.FC<Props> = ({ item }) => {
  console.log(item.image);
  return (
    <>
      <div className="card__general">
        <h4 className="card__title">{item.city}</h4>
      </div>
    </>
  );
};
