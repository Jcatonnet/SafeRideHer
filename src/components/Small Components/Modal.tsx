import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { SubmissionForm } from "../../globe/components/SubmissionForm/SubmissionForm";
import { send } from "emailjs-com";
import { Alert, AlertTitle } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  height: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
};

const alert__box = {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: "10",
  top: 20,
};

export const SubmissionModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [successAlertOpen, setSuccessAlertOpen] = useState(false);
  const [erroAlertOpen, setErrorAlertOpen] = useState(false);

  const handleSubmit = (data: any) => {
    console.log("data", data);
    send("service_dovxsdo", "template_6pr1rw4", data, "KJrYV_D7TUeK9DdQH")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setModalOpen(false);
        setSuccessAlertOpen(true);
        setTimeout(() => {
          setSuccessAlertOpen(false);
        }, 3000);
      })
      .catch((err) => {
        setErrorAlertOpen(true);
        setTimeout(() => {
          setErrorAlertOpen(false);
        }, 3000);
        console.log("FAILED...", err);
      });
  };

  const onCancel = () => {
    setModalOpen(false);
  };

  return (
    <Box>
      <Box sx={alert__box}>
        {successAlertOpen && (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            You have successfully submitted a club —
            <strong>We will review it in the coming day</strong>
          </Alert>
        )}
        {erroAlertOpen && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Your submission failed -
            <strong>
              Please check your internet connection or retry in few minutes
            </strong>
          </Alert>
        )}
      </Box>
      <Box>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setModalOpen(true)}
        >
          I want to reference a club
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={modalOpen}
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={modalOpen}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Please fill in the club info !
              </Typography>
              <Typography
                id="transition-modal-title"
                variant="body2"
                component="h2"
              >
                The provided info will be reviewed by our team and if it meets
                Feminlist standards, the club will be referenced on the platform
              </Typography>
              <SubmissionForm onSubmit={handleSubmit} onCancel={onCancel} />
            </Box>
          </Fade>
        </Modal>
      </Box>
    </Box>
  );
};
