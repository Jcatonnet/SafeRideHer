import { Box, Grid } from "@material-ui/core";
import { Stack } from "@mui/material";
import "./DescriptionBox.style.css";

export const DescriptionBox = ({ sportClub }: any) => {
  return (
    <Box className="description__container">
      <Grid className="description__full" container spacing={3}>
        <Grid item xs={2}>
          <Stack spacing={2}>
            <h3 className="description__title">{sportClub.clubName}</h3>
            <img
              src="/images/snowboard.png"
              alt="logo"
              width="70"
              border-radius="50%"
              margin-left="10px"
            />
          </Stack>
        </Grid>
        <Grid className="description__info" item xs={10}>
          <Stack>
            <Grid className="description__icons" container spacing={2}>
              <Grid item xs={2}>
                <img
                  src="/images/whatsapp.png"
                  alt="logo"
                  width="30"
                  border-radius="50%"
                  margin-left="10px"
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src="/images/gmail.png"
                  alt="logo"
                  width="30"
                  border-radius="50%"
                  margin-left="10px"
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src="/images/facebook.png"
                  alt="logo"
                  width="30"
                  border-radius="50%"
                  margin-left="10px"
                />
              </Grid>
              <Grid item xs={2}>
                <img
                  src="/images/instagram.png"
                  alt="logo"
                  width="30"
                  border-radius="50%"
                  margin-left="10px"
                />
              </Grid>
            </Grid>
            <p>{sportClub.description}</p>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
