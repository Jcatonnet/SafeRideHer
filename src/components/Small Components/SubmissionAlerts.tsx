import { Alert, AlertTitle } from "@mui/material";

export const SubmissionAlerts = ({ successOpen, errorOpen }: any) => {
  return (
    <>
      {successOpen && (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          You have successfully submitted a club —
          <strong>We will review it in the coming day</strong>
        </Alert>
      )}
      {errorOpen && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Your submission failed -
          <strong>
            Please check your internet connection or retry in a few minutes
          </strong>
        </Alert>
      )}
    </>
  );
};
