import { Box } from "@material-ui/core";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import "./LandingPage.styles.css";

export const LandingPage = () => {
  const [displayTagNote, setDisplayTagNote] = useState<boolean>();

  useEffect(() => {
    setDisplayTagNote(true);
    setTimeout(() => {
      setDisplayTagNote(false);
    }, 3000);
  }, []);

  return (
    <Stack className="landing__info" style={{ color: "white" }}>
      {displayTagNote ? (
        <Fade>
          <h1 className="landing__tagPhrase">
            There is no reason women could not pursue there adrenaline dreams
            without feeling safe
          </h1>
        </Fade>
      ) : (
        <>
          <Fade>
            <h1 style={{ color: "#c036d8" }}> Welcome to Feminlist ! </h1>
            <h3>
              Here women can find women-only extreme sport clubs and connect
              with like-minded individuals to pursue their passions in a safe
              and supportive environment. The male-dominated nature of many
              extreme sports can be a major barrier for women, so we created a
              community-driven platform to create a safer place and promote
              gender equality in extreme sports !
            </h3>

            <h3>
              Join us on this journey to break down barriers and create more
              opportunities for women to pursue their passions in extreme
              sports. We believe that by supporting each other, we can achieve
              our dreams and practice what we love in a safe place. Let's get
              started!
            </h3>
            <h3>
              This platform is based on community insights. If you know a great
              club that might help other members, please submit it using the top
              page button !
            </h3>
          </Fade>
        </>
      )}
    </Stack>
  );
};
