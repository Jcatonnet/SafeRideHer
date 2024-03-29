import { Box, Grid } from "@material-ui/core";
import { Stack } from "@mui/material";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import "./DescriptionBox.style.css";

export const DescriptionBox = ({ sportClub }: any) => {
  const [showIcon, setShowIcon] = useState(true);
  const isMobile = window.innerWidth <= 767;

  const handleIconClick = () => setShowIcon(!showIcon);

  return (
    <Box className="description__container">
      <Grid wrap="nowrap" container spacing={2}>
        <Grid xs={2}>
          <Stack alignItems="center" spacing={2}>
            <h3 className="description__title">{sportClub.clubName}</h3>
            <img
              src={"/images/" + `${sportClub.type}` + ".png"}
              alt="logo"
              width="50"
              border-radius="50%"
              margin-left="20px"
            />
          </Stack>
        </Grid>
        <Grid item xs={9}>
          <Stack spacing={3}>
            <Grid className="description__icons" container spacing={2}>
              {showIcon ? (
                <Grid item xs={2}>
                  {isMobile ? (
                    <a
                      target="_blank"
                      href={
                        "https://wa.me/" +
                        `${sportClub.phoneNumber.substring(
                          sportClub.phoneNumber.indexOf(" ") + 1
                        )}`
                      }
                      rel="noreferrer"
                    >
                      <img
                        src="/images/whatsapp.png"
                        alt="logo"
                        width="30"
                        border-radius="50%"
                        margin-left="10px"
                      />
                    </a>
                  ) : (
                    <img
                      src="/images/whatsapp.png"
                      alt="logo"
                      width="30"
                      border-radius="50%"
                      margin-left="10px"
                      onClick={handleIconClick}
                    />
                  )}
                </Grid>
              ) : (
                <Grid item xs={3}>
                  <p onClick={handleIconClick}>
                    {sportClub.phoneNumber
                      ? sportClub.phoneNumber
                      : "Unavailable"}
                  </p>
                </Grid>
              )}
              <Grid item xs={2}>
                {sportClub.email ? (
                  <a href={"mailto:" + `${sportClub.email}`}>
                    <img
                      src="/images/gmail.png"
                      alt="logo"
                      width="30"
                      border-radius="50%"
                      margin-left="10px"
                    />
                  </a>
                ) : (
                  <img
                    src="/images/gmail.png"
                    alt="logo"
                    width="30"
                    border-radius="50%"
                    margin-left="10px"
                    className="img__gray"
                  />
                )}
              </Grid>
              <Grid item xs={2}>
                {sportClub.facebook ? (
                  <a target="_blank" href={sportClub.facebook} rel="noreferrer">
                    <img
                      src="/images/facebook.png"
                      alt="logo"
                      width="30"
                      border-radius="50%"
                      margin-left="10px"
                    />
                  </a>
                ) : (
                  <img
                    src="/images/facebook.png"
                    alt="logo"
                    className="img__gray"
                    width="30"
                    border-radius="50%"
                    margin-left="10px"
                  />
                )}
              </Grid>
              <Grid item xs={2}>
                {sportClub.instagram ? (
                  <a
                    target="_blank"
                    href={sportClub.instagram}
                    rel="noreferrer"
                  >
                    <img
                      src="/images/instagram.png"
                      alt="logo"
                      width="30"
                      border-radius="50%"
                      margin-left="10px"
                    />
                  </a>
                ) : (
                  <img
                    src="/images/instagram.png"
                    alt="logo"
                    width="30"
                    border-radius="50%"
                    margin-left="10px"
                    className="img__gray"
                  />
                )}
              </Grid>
            </Grid>
            <Typography className="description__text" variant="body2">
              {sportClub.description}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
