import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  SubmissionForm,
  SubmissionFormFields,
} from "../../globe/components/SubmissionForm/SubmissionForm";
import { send } from "emailjs-com";
import { useState } from "react";
import { SubmissionAlerts } from "./SubmissionAlerts";

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

  "@media (max-width: 767px)": {
    width: "90%",
    height: "90%",
  },
};

const alert__box = {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  top: 20,
  "@media (max-width: 767px)": {
    width: "100%",
  },
  zIndex: 1,
};

export const SubmissionModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [successAlertOpen, setSuccessAlertOpen] = useState(false);
  const [errorAlertOpen, setErrorAlertOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (data: SubmissionFormFields) => {
    setIsLoading(true);
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
        setIsLoading(false);
        console.log("FAILED...", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onCancel = () => {
    setModalOpen(false);
  };

  return (
    <Box>
      <Box sx={alert__box}>
        <SubmissionAlerts
          successOpen={successAlertOpen}
          errorOpen={errorAlertOpen}
        />
      </Box>
      <Box>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setModalOpen(true)}
        >
          I want to refer a club
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
                variant="h5"
                color="secondary"
              >
                Please fill in the club info !
              </Typography>
              <Typography id="transition-modal-title" variant="body2">
                The provided info will be reviewed by our team and if it meets
                SafeRideHer standards, the club will be referenced on the
                platform
              </Typography>
              <SubmissionForm
                onSubmit={handleSubmit}
                onCancel={onCancel}
                isLoading={isLoading}
              />
            </Box>
          </Fade>
        </Modal>
      </Box>
    </Box>
  );
};
