import { Box, Grid } from "@material-ui/core";
import { Stack } from "@mui/material";
import { useState } from "react";
import "./DescriptionBox.style.css";

export const DescriptionBox = ({ sportClub }: any) => {
  const [showIcon, setShowIcon] = useState(true);
  const handleIconClick = () => setShowIcon(!showIcon);

  return (
    <Box className="description__container">
      <Grid className="description__full" container spacing={3}>
        <Grid item xs={2}>
          <Stack spacing={1} className="description__title">
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
        <Grid className="description__info" item xs={10}>
          <Stack>
            <Grid className="description__icons" container spacing={2}>
              {showIcon ? (
                <Grid item xs={2}>
                  <img
                    src="/images/whatsapp.png"
                    alt="logo"
                    width="30"
                    border-radius="50%"
                    margin-left="10px"
                    onClick={handleIconClick}
                  />
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
                  <a target="_blank" href={sportClub.facebook}>
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
                  <a target="_blank" href={sportClub.instagram}>
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
            <p>{sportClub.description}</p>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
