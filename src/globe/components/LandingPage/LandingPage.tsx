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
    }, 5000);
  }, []);

  return (
    <Stack style={{ color: "white" }}>
      <Box className="landing__title">
        <img
          src="/images/lostXtrem.png"
          width="250"
          alt="Logo"
          style={{ borderRadius: "50%", boxShadow: "20px 20px 50px grey" }}
        />
      </Box>
      {displayTagNote ? (
        <Fade>
          <h1 className="landing__tagPhrase">
            There is no reasons women could not pursue there adrenaline dreams
            without feeling safe
          </h1>
        </Fade>
      ) : (
        <>
          <Fade>
            <h3>
              Welcome to Feminlist ! Here women can find women-only extreme
              sport clubs and connect with like-minded individuals to pursue
              their passions in a safe and supportive environment. The
              male-dominated nature of many extreme sports can be a major
              barrier for women, so we created a community-driven platform to
              empower women and promote gender equality in extreme sports !
            </h3>

            <h3>
              Join us on this journey to break down barriers and create more
              opportunities for women to pursue their passions in extreme
              sports. We believe that by supporting each other, we can achieve
              our dreams and inspire future generations of women in extreme
              sports. Let's get started!
            </h3>
          </Fade>
        </>
      )}
    </Stack>
  );
};
