import { CityType } from "../../utils/types";
import "./CityCard.styles.css";

type Props = {
  city: CityType;
};

export const CityCard: React.FC<Props> = ({ city }) => {
  return (
    <>
      <div className="card__general">
        <h4 className="card__title">{city.cityName}</h4>
      </div>
    </>
  );
};
