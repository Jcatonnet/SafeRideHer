import { CityType } from "../../utils/types";
import "./CityCard.styles.css";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";

type Props = {
  city: CityType;
  handleClick: () => void;
};

export const CityCard: React.FC<Props> = ({ city, handleClick }) => {
  return (
    <>
      <Card id={city.cityName} onClick={handleClick}>
        <CardActionArea
          className="card__general"
          style={{
            backgroundImage: "url(" + `${city.image}` + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <CardContent>
            <Typography className="card__title">{city.cityName}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
